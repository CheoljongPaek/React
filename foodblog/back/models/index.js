// 'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');

const db = {};

/* Connecting to db */
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);
/* End */
db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);

/* Testing db connection */
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
/* End */

module.exports = db;