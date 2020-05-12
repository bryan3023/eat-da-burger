const mysql = require("mysql")

/*
  Manages the database connection and provides utility functions to models.
 */
class BurgerDatabase {

  constructor() {
    if (process.env.JAWSDB_URL) {
      this.connection = mysql.createConnection(process.env.JAWSDB_URL)
    } else {
      this.connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "bryan3023.eat_da_burger",
        password: "ifM91qUy89*#%R^QsFjN",
        database: "eat_da_burger_DB"
      })
    }

    this.connection.connect((error) => {
      if (error) throw error
    })
  }

  /*
    Close the connection when done.
   */
  async close() {
    this.connection.end()
  }


  /*
    Runs queries and returns a promise for processing.
   */
  query(queryString, conditions) {
    return new Promise((resolve, reject) => {
      const queryCallback =
        (error, results) => error ? reject(error) : resolve(results)

      if (conditions !== undefined) {
        this.connection.query(queryString, conditions, queryCallback)
      } else {
        this.connection.query(queryString, queryCallback)
      }
    })
  }
}

module.exports = BurgerDatabase
