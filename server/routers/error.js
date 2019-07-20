/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/routers/error.js                    *
 * File Description : error router                        *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
const router = require('koa-router')()

module.exports = router.get('*',  async ( ctx ) => {
  const title = 'error'
  await ctx.render('error', {
    title
  })
})
