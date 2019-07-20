/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : init/util/db.js                            *
 * File Description : mysql 를 통한 DB 접속                *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
const mysql = require('mysql')
const config = require('./../../config')
const dbConfig = config.database

const pool = mysql.createPool({
  host     :  dbConfig.HOST,
  port	   :  dbConfig.PORT,
  user     :  dbConfig.USERNAME,
  password :  dbConfig.PASSWORD,
  database :  dbConfig.DATABASE
})


let query = function( sql, values ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        console.log( err )
        resolve( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            console.log( err )
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}


module.exports = {
  query
}
