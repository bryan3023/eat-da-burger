/*
  Manages burgers in the database.
 */
class BurgerModel {
  
  constructor(database) {
    this.database = database
  }


  /*
    Return all burgers
   */
  async getAll() {
    return await this.database.selectAll("burgers")
  }


  /*
    Add a burger
   */
  async add(burger) {
    await this.database.insertOne("burgers", "burger_name", burger)
  }


  /*
    Mark a buger as eaten.
   */
  async devour(burgerId) {
    await this.database.updateOne("burgers", "devoured", true, burgerId)
  }
}

module.exports = BurgerModel
