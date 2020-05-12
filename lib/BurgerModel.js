/*
  Manages burgers in the database.
 */
class BurgerModel {
  
  constructor(database) {
    this.database = database

    this.selectString = "SELECT * FROM burgers"
    this.insertString = "INSERT INTO burgers SET name = ?"
    this.updateString = "UPDATE burgers SET eaten = TRUE WHERE id = ?"
  }


  /*
    Return all burgers
   */
  async getAll() {
    return await this.database.query(this.selectString)
  }


  /*
    Add a burger
   */
  async add(burger) {
    console.log(this.getSantizedVarchar(burger))
    await this.database.query(
      this.insertString,
      this.getSantizedVarchar(burger, 120)
    )
  }


  /*
    Consume a burger
   */
  async devour(burgerId) {
    await this.database.query(this.updateString, burgerId)
  }


  /*
    Ensure truncate text of it's beyond the allowed length.
   */
  getSantizedVarchar(text, length) {
    return text.length <= length ?
      text : text.substring(0,length)
  }
}

module.exports = BurgerModel
