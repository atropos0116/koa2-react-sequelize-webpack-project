/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/services/user-info.js               *
 * File Description : user service                        *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
const validator = require('validator')
const models = require('./../models')
const userCode = require('./../codes/user')

const user = {

  /**
   * create user
   * @param  {object} user
   * @return {object}
   */
  async create(user) {
    let result = await models.UserInfo.create(
      {
        id: model.id,
        email: model.email,
        password: model.password,
        name: model.userName,
        nick: model.nick,
        detail_info: model.detail_info,
        level: model.level
      }
    ).catch(err => {
      console.error(err);
    })

    return result
  },

  /**
   * get user
   * @param  {object} formData
   * @return {object|null}
   */
  async getExistOne(formData) {
    let resultData = await models.UserInfo.findOne(
      {
        where:
        {
          email: formData.email,
          name: formData.userName
        }
      }
    )

    return resultData
  },

  /**
   * login
   * @param  {object} formData
   * @return {object}
   */
  async signIn(formData) {
    console.log(formData)
    let resultData = await models.UserInfo.findOne(
      {
        where:
        {
          name: formData.userName,
          password: formData.password
        }
      }
    ).catch(err => {
      console.error(err);
    })

    return resultData
  },


  /**
   * get user information by name
   * @param  {string} userName
   * @return {object|null}
   */
  async getUserInfoByUserName(userName) {
    let resultData = await models.UserInfo.getUserInfoByUserName(
      {
        where:
        {
          name: userName
        }
      }
    ).catch(err => {
      console.error(err);
    });

    let userInfo = {
      email: resultData.email,
      userName: resultData.userName,
      detailInfo: resultData.detail_info,
      createTime: resultData.create_time
    }

    return userInfo
  },


  /**
   * validate sign up
   * @param  {object} userInfo
   * @return {object}
   */
  validatorSignUp(userInfo) {
    let result = {
      success: false,
      message: '',
    }

    if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
      result.message = userCode.ERROR_USER_NAME
      return result
    }
    if ( !validator.isEmail( userInfo.email ) ) {
      result.message = userCode.ERROR_EMAIL
      return result
    }
    if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
      result.message = userCode.ERROR_PASSWORD
      return result
    }
    if ( userInfo.password !== userInfo.confirmPassword ) {
      result.message = userCode.ERROR_PASSWORD_CONFORM
      return result
    }

    result.success = true

    return result
  }

}

module.exports = user
