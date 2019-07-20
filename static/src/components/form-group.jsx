/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/src/components/form-group.js        *
 * File Description : form group                          *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
import React from 'react'
import { Tabs } from 'antd'
import SignInForm from './../components/sign-in-form.jsx'
import SignUpForm from './../components/sign-up-form.jsx'

const TabPane = Tabs.TabPane

class FormGroup extends React.Component {
  render() {
    return (
      <div style={{ width: "640px", margin: "0 auto" }}>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="로그인" key="1">
            <SignInForm />
          </TabPane>
          <TabPane tab="회원가입" key="2">
            <SignUpForm />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default FormGroup