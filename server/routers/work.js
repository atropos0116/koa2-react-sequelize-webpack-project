/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/routers/work.js                     *
 * File Description : work router                         *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
const router = require('koa-router')()
const controller = require('./../controllers/work')

const routers = router
  .get('/', controller.indexPage)


module.exports = routers
