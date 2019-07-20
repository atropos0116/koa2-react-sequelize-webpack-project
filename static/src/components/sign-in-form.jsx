/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/src/components/sign-in-form.js      *
 * File Description : sign in form                        *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import Request from './../utils/request'
import { signInApi, signInForm } from './../api/sign-in'

const FormItem = Form.Item;

const SignInForm = Form.create()(React.createClass({
  
  async handleSubmit(e) {
    e.preventDefault()

    let values = await this.getFormValues()
    if ( values ) {
      let result = await signInApi( values )
      if ( result && result.success === true ) {
        message.success( '로그인성공！' )
        signInForm( values )
      } else if ( result && result.message ){
        message.error( result.message )
      }
    } else {
      message.error( '시스템이 바쁘니, 다시 시도해주세요！' )
    }
  },


  getFormValues() {
    let that = this
    return new Promise((resolve, reject) => {
      that.props.form.validateFields((err, values) => {
        if (!err) {
          resolve( values )
        } else {
          reject( false )
        }
      })
    })
  },

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ width: "280px", margin: "0 auto" }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '이름을 입력해 주세요' }],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder="이름을 입력해 주세요！" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '비밀 번호를 입력해 주세요！' }],
            })(
              <Input addonBefore={<Icon type="lock" />} type="password" placeholder="비밀 번호를 입력해 주세요 !" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>로그인</Checkbox>
            )}
            <a className="login-form-forgot">비밀 번호 분실</a><br/>
            <Button type="primary" htmlType="submit" className="login-form-button">
        확인
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  },
}))
export default SignInForm