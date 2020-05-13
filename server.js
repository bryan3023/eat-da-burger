const
  express = require("express"),
  handlebars = require("express-handlebars"),
  mysql = require("mysql")

const
  database = new (require("./lib/BurgerDatabase"))(),
  burgers = new (require("./lib/BurgerModel"))(database)

const
  app = express(),
  PORT = process.env.PORT || 8080


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


/*
  Show the lists of burgers on the main page.
 */
app.get("/", function(req, res) {
  burgers.getAll()
    .then((result, error) => {
      const
        eaten = result.filter(b => b.eaten),
        uneaten = result.filter(b => !b.eaten)

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


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT)
})


// --- Utility function ---

/*
  Log any errors to the console.
 */
function logError(error) {
  console.error(error)
}