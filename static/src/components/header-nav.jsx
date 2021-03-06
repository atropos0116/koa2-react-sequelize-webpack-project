/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/src/components/header-nav.js        *
 * File Description : header navigator                    *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd'

import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout

class HeaderNav extends React.Component {
  render() {
    return (
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
          <Menu.Item key="2"><a href="/admin">Admin</a></Menu.Item>
          <Menu.Item key="3"><a href="/work">Work</a></Menu.Item>
        </Menu>
      </Header>
    )
  }
}


export default HeaderNav