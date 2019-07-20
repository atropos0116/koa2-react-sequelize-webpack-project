/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : init/util/init.js                          *
 * File Description : sql initialize                      *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
const fs = require('fs');
const getSqlContentMap = require('./util/get-sql-content-map');
const { query } = require('./util/db');

const eventLog = function( err , sqlFile, index ) {
  if( err ) {
    console.log(`[ERROR] sql script file: ${sqlFile} 第${index + 1}script file execution failed o(╯□╰)o ！`)
  } else {
    console.log(`[SUCCESS] sql script file: ${sqlFile} 第${index + 1}script file execution successed O(∩_∩)O !`)
  }
}

let sqlContentMap = getSqlContentMap()

const createAllTables = async () => {
  for( let key in sqlContentMap ) {
    let sqlShell = sqlContentMap[key]
    let sqlShellList = sqlShell.split(';')

    for ( let [ i, shell ] of sqlShellList.entries() ) {
      if ( shell.trim() ) {
        let result = await query( shell )
        if ( result.serverStatus * 1 === 2 ) {
          eventLog( null,  key, i)
        } else {
          eventLog( true,  key, i)
        }
      }
    }
  }
  console.log('sql load successed.')
  console.log('please press button ctrl + c ！')

}

createAllTables();
