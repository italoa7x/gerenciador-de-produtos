const knexFile = require('../../knexfile');
const knex = require('knex');

const connection = knex(knexFile.development);

module.exports = connection;