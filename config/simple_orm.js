const connection = require("./connection")()

/*
  Manages the database connection and provides basic ORM to models.
 */
class SimpleOrm {

  constructor() {
    this.connection = connection
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
    Select all rows from the specified table.
   */
  async selectAll(table) {
    const selectString = `SELECT * FROM ${table}`
    return await this.query(selectString)
  }


  /*
    Insert a value into the specified table/column.
   */
  async insertOne(table, column, value) {
    const insertString = `INSERT INTO ${table} SET ${column} = ?`
    await this.query(insertString, this.getSantizedVarchar(value))
  }


  /*
    Update a value into the specified table/column based on an ID.
   */
  async updateOne(table, column, value, whereId) {
    const updateString = `UPDATE ${table} SET ${column} = ? WHERE id = ?`
    await this.query(updateString, [value, whereId])
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


  /*
    Truncate text of it's beyond the allowed length.
   */
  getSantizedVarchar(text, length) {
    return text.length <= length ?
      text : text.substring(0,length)
  }
}

module.exports = SimpleOrm
