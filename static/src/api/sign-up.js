/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : static/src/api/sign-up.js                  *
 * File Description : sign up api                         *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
import Request from './../utils/request'
import validator from 'validator'

const signUpApi = async ( userInfo ) => {

  let validateResult = validatorSignUp( userInfo )

  if ( validateResult.success === false ) {
    return validateResult
  }

  let result = Request.post({
    url: '/api/user/signUp.json',
    data: userInfo
  })

  return result;
}

const validatorSignUp = ( userInfo ) => {
  let result = {
    success: false,
    message: '',
  }

  if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
    result.message = '아이디 형식으로 6-16인 알파벳 소문자'
    return result
  }
  if ( !validator.isEmail( userInfo.email ) ) {
    result.message = '정확한 메일 주소를 입력하십시오.'
    return result
  }
  if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
    result.message = '비밀 번호 길이는 6-16이어야 합니다.'
    return result
  }
  if ( userInfo.password !== userInfo.confirmPassword ) {
    result.message = '암호가 일치하지 않는다.'
    return result
  }

  result.success = true

  return result
}


export  { signUpApi }