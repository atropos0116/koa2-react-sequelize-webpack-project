/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : server/controllers/admin.js                *
 * File Description : admin controller                    *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.30   1.0            First draft  *
 **********************************************************/
module.exports = {

  async indexPage ( ctx ) {
    const title = 'admin page'
    await ctx.render('admin', {
      title,
    })
  },

}
