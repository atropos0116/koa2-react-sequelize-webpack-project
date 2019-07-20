/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/controllers/work.js                 *
 * File Description : work controller                     *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
module.exports = {

  async indexPage ( ctx ) {
    // check session
    if ( ctx.session && ctx.session.isLogin && ctx.session.userName ) {
      const title = 'work'
      await ctx.render('work', {
        title,
      })
    } else {
      ctx.redirect('/error')
    }
  },

}
