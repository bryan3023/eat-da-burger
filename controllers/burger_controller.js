const
  database = new (require("../config/simple_orm"))(),
  burgers = new (require("../models/burger_model"))(database)


/*
  Log any errors to the console.
 */
function logError(error) {
  console.error(error)
}


module.exports = function(app) {

  /*
    Show the lists of burgers on the main page.
  */
  app.get("/", function(req, res) {
    burgers.getAll()
      .then((result, error) => {
        const
          eaten = result.filter(b => b.devoured),
          uneaten = result.filter(b => !b.devoured)

        if (error) throw new Error(error)

        res.render("index", {
          eaten: eaten,
          uneaten: uneaten
        })
      })
      .catch(logError)
  })
  
  
  /*
    Add a burger to the database. Empty values will be ignored.
   */
  app.post("/", function(req, res) {
    const burger = req.body.burger
  
    if (!burger.trim()) {
      res.redirect("/")
    } else {
      burgers.add(burger)
        .then((result, error) => {
          if (error) throw new Error(error)
          res.redirect("/")
        })
        .catch(logError)
    }
  })
  
  
  /*
    Consume a burger.
   */
  app.post("/devour", function(req, res) {
    const { burgerId } = req.body
  
    burgers.devour(burgerId)
      .then((result, error) => {
        if (error) throw new Error(error)
        res.redirect("/")
      })
      .catch(logError)
  })
}