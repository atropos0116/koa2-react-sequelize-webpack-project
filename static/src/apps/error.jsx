/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/src/app/error.js                    *
 * File Description : error page                          *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import FooterCommon from './../components/footer-common.jsx'

import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout

class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <p>error</p>
          </div>
        </Content>
        <FooterCommon/>
      </Layout>
    )
  }
}


export default App