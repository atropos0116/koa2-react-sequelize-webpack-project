/**********************************************************
 * Copyright ⓒ 2018 Baik All Rights Reserved.            *
 *                                                        *
 *                                                        *
 * File Name : model/user.js                              *
 * File Description : user model                          *
 **********************************************************
 * Author      * Date       * Revision     * Description  *
 * atropos0116   2018.08.22   1.0            First draft  *
 **********************************************************/
module.exports = function(sequelize, DataTypes) {
	const user = sequelize.define('UserInfo', {
		id: {field: 'id', type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false},
		email: {field: 'email', type: DataTypes.STRING(255), unique: true, allowNull: false},
		password: {field: 'password', type: DataTypes.STRING(255), allowNull: false},
		name: {field: 'name', type: DataTypes.STRING(255), allowNull: false},
		nick: {field: 'nick', type: DataTypes.STRING(255)},
		detail_info: {field: 'detail_info', type: DataTypes.TEXT('long')},
		level: {field: 'level', type: DataTypes.STRING(2)}
	}, {
		underscored: true,
		freezeTablename: true,
		tableName: 'user_info'
	});

	return user;
};
