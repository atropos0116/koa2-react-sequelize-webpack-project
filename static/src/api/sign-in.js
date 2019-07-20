/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/src/api/sign-in.js                  *
 * File Description : sign in api                         *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
import Request from './../utils/request'

const signInApi = async ( userInfo ) => {
  let result = await Request.post({
    url: '/api/user/signIn.json',
    data: userInfo
  })
  return result
}

const signInForm = ( userInfo ) => {
  userInfo.source = 'form';
  Request.form({
    url: '/api/user/signIn.json',
    data: userInfo,
  })
}

export  { signInApi , signInForm }

