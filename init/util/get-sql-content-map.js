/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : init/util/get-sql-content-map.js           *
 * File Description : sql content getter                  *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
const fs = require('fs')
const getSqlMap = require('./get-sql-map')

let sqlContentMap = {}

/**
 * get sql content
 * @param  {string} fileName
 * @param  {string} path
 * @return {string}
 */
function getSqlContent( fileName,  path ) {
  let content = fs.readFileSync( path, 'binary' )
  sqlContentMap[ fileName ] = content
}

/**
 * get all sql cotent
 * @return {object}
 */
function getSqlContentMap () {
  let sqlMap = getSqlMap()
  for( let key in sqlMap ) {
    getSqlContent( key, sqlMap[key] )
  }

  return sqlContentMap
}

module.exports = getSqlContentMap
