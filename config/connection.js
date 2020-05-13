const mysql = require("mysql")

module.exports = function() {
  if (process.env.JAWSDB_URL) {
    return mysql.createConnection(process.env.JAWSDB_URL)
  } else {
    return mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "bryan3023.eat_da_burger",
      password: "ifM91qUy89*#%R^QsFjN",
      database: "eat_da_burger_DB"
    })
  }
}
