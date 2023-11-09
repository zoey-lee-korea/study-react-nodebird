const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;