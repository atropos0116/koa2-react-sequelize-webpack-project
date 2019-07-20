/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/controllers/index.js                *
 * File Description : index controller                    *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
module.exports = async ( ctx ) => {
  const title = 'home'
  await ctx.render('index', {
    title
  })
}
