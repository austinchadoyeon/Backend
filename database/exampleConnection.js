const { Pool, Client } = require('pg')

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'atelier',
  password: 'password',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  connect: (err, client, done) => {
    return pool.connect(err, client, done);
  }
}