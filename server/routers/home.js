/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/routers/home.js                     *
 * File Description : home router                         *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
const router = require('koa-router')()
const index = require('../controllers/index')

module.exports = router
  .get('/', index)
