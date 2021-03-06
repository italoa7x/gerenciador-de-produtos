// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.sqlite3'
    },
    migrations:{
      directory: './src/database/migrations/'
    },
    useNullAsDefault: false
  },
};
