/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/src/components/sign-up-form.js      *
 * File Description : sign up form                        *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, message } from 'antd'
import { signUpApi } from './../api/sign-up'

const FormItem = Form.Item
const Option = Select.Option


const SignUpForm = Form.create()(React.createClass({
  
  getInitialState() {
    return {
      passwordDirty: false,
    }
  },

  async handleSubmit(e) {
    e.preventDefault()
    let values = await this.getFormValues()  

    if ( values ) {
      let result = await signUpApi( values )
      if ( result && result.success === true ) {
        message.success( '회원가입 성공！' )
        window.location.href = '/admin?signUpSuccess=true'
      } else if ( result && result.message ){
        message.error( result.message )
      }
    } else {
      message.error( '시스템이 바쁘니, 다시 시도해주세요！' )
    }
    
  },

  getFormValues() {
    let that = this
    return new Promise(( resolve, reject ) => {
      that.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          resolve( values )
        } else {
          reject( false )
        }
      })
    })
  },

  handlePasswordBlur(e) {
    const value = e.target.value
    this.setState({ passwordDirty: this.state.passwordDirty || !!value })
  },
  
  checkPassword(rule, value, callback) {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('비밀 번호가 일치하지 않으므로 검사해 주십시오!')
    } else {
      callback()
    }
  },
  
  checkConfirm(rule, value, callback) {
    const form = this.props.form
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  },
  
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    }
    
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              아이디
              <Tooltip title="반드시 6-16자의 알파벳이나 숫자, 혹은 밑줄을 쳐서는 안 되며, 숫자로 시작하면 안 됩니다.">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '아이디를 입력해 주세요' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="E-mail주소"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '정확한 양식의 주소를 입력하십시오.',
            }, {
              required: true, message: '메일 주소를 입력해 주세요！',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="비밀번호"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '비밀 번호를 입력해 주세요！',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" onBlur={this.handlePasswordBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="비밀 번호 확인"
          hasFeedback
        >
          {getFieldDecorator('confirmPassword', {
            rules: [{
              required: true, message: '비밀 번호를 다시 입력해 주세요！',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>읽음<a>《동의》</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">확인</Button>
        </FormItem>
      </Form>
    )
  },
}))


export default SignUpForm

