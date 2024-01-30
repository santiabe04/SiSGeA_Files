const mysql = require("mysql2")

// Create a MySQL pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '45752350',
  database: 'sisgea_files',
  waitForConnections: true,
  connectionLimit: 0,
  queueLimit: 0
})

// Promisify the pool
const promisePool = pool.promise()

// Export the promise pool for use in other modules
module.exports = promisePool