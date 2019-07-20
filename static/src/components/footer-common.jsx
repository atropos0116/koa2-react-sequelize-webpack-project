/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/src/components/footer-common.js     *
 * File Description : footer                              *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
const {  Footer } = Layout

class FooterCommon extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        Copyright ⓒ 2018 Baik All Rights Reserved.
      </Footer>
    )
  }
}


export default FooterCommon