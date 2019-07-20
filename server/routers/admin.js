/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/routers/admin.js                    *
 * File Description : admin router                        *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
const router = require('koa-router')()
const admin = require('./../controllers/admin')

module.exports = router.get( '/', admin.indexPage )
