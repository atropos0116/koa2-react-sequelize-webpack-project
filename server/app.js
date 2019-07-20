/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.        *
 *                                                        *
 *                                                        *
 * File Name : server/app.js                              *
 * File Description :                                     *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
const path = require('path')
const Koa = require('koa')
const convert = require('koa-convert')
const views = require('koa-views')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')

const config = require('./../config') 
const routers = require('./routers/index')

const env       = process.env.NODE_ENV || 'development';
const dbConfig    = require(__dirname + '/../config/sequelize.json')[env];

const models = require('./models')

const app = new Koa()

//DB session info
const sessionMysqlConfig= {
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host,
  port: dbConfig.port
}

//connect To DB
models.sequelize.sync()
	.then(() => {
		console.log('DB connection success.');
	})
	.catch(err => {
		console.error(err);
		console.log('DB connection error. Please make sure DB is running.');
		process.exit();
	});

// register session key
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

app.use(convert(koaLogger()))

app.use(bodyParser())

app.use(convert(koaStatic(
  path.join(__dirname , './../static')
)))

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port)
console.log(`the server is start at port ${config.port}`)
