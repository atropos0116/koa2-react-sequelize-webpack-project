/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : init/util/get-sql-map.js                   *
 * File Description : get sqls                            *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
const fs = require('fs')
const walkFile = require('./walk-file')

/**
 * get sql list
 * @return {object}
 */
function getSqlMap () {
  let basePath = __dirname
  basePath = basePath.replace(/\\/g, '\/')

  let pathArr = basePath.split('\/')
  pathArr = pathArr.splice( 0, pathArr.length - 1 )
  basePath = pathArr.join('/') + '/sql/'

  let fileList = walkFile( basePath, 'sql' )
  return fileList
}

module.exports = getSqlMap
