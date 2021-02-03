const Sequelize = require('sequelize');

require('dotenv').config();
//establish concetion to db/////
const sequelize = process.env.DBNAME
    new Sequelize(process.env.DBNAME)
	new Sequelize(process.env.DBNAME, process.env.DBNAME, process.env.DBNAME, {
			host    : 'localhost',
			dialect : 'mysql',
			port    : 3306
		});

module.exports = sequelize;
