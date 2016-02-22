var config = require('./knexfile.js');
var env = 'development';
var knex = require('knex')(config.env);

DELETE FROM knex_migrations_lock;
module.exports = knex;
