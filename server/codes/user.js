/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/codes/user.js                       *
 * File Description : user code                           *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
const userCode = {

  ERROR_USER_NAME: '아이디:6-16인의 소문자',

  ERROR_EMAIL: '정확한 메일 주소를 입력하십시오.',

  ERROR_PASSWORD: '패스워드 길이는 6-16 입니다..',

  ERROR_PASSWORD_CONFORM: '비밀 번호가 두 번 일치하지 않습니다.',

  ERROR_SYS: '시스템 에러',

  FAIL_EMAIL_IS_EXIST: '이메일은 이미 등록되어 있습니다.',

  FAIL_USER_NAME_IS_EXIST: '아이디는 이미 등록되어 있습니다.',

  FAIL_USER_NAME_OR_PASSWORD_ERROR: '아이디 또는 로그인 암호 오류',

  FAIL_USER_NO_LOGIN: '가입자 등록 불가',

  FAIL_USER_NO_EXIST: '사용자가 존재하지 않습니다.',
}

module.exports = userCode
