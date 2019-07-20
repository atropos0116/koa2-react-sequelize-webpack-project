/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : init/util/walk-file.js                     *
 * File Description : get sql file list                   *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
const fs = require('fs')

/**
 * get directory list
 * @param  {string} pathResolve
 * @param  {string} mime
 * @return {object}
 */
const walkFile = function(  pathResolve , mime ){

  let files = fs.readdirSync( pathResolve )

  let fileList = {}

   for( let [ i, item] of files.entries() ) {
    let itemArr = item.split('\.')

    let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : 'undefined'
    let keyName = item + ''
    if( mime === itemMime ) {
      fileList[ item ] =  pathResolve + item
    }
  }

  return fileList
}

module.exports = walkFile
