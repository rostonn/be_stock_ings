module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sk'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
