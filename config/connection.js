const mysql = require("mysql")

module.exports = function() {
  if (process.env.JAWSDB_URL) {
    return mysql.createConnection(process.env.JAWSDB_URL)
  } else {
    const
      env = process.env.NODE_ENV || 'development',
      config = require('./config.json')[env]
  
    return mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.username,
      password: config.password,
      database: config.database
    })
  }
}
