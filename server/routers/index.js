/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/routers/index.js                    *
 * File Description : router mapper                       *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
const router = require('koa-router')()

const api = require('./api')
const home = require('./home')
const admin = require('./admin')
const work = require('./work')
const error = require('./error')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/work', work.routes(), work.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())

module.exports = router
