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


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


app.get("/", function(req, res) {
  burgers.getAll().then((result, error) => {
    const
      eaten = result.filter(b => b.eaten),
      uneaten = result.filter(b => !b.eaten)

    if (error) {
      throw new Error(error)
    }
  
    res.render("index", {
      eaten: eaten,
      uneaten: uneaten
    })
  }).catch((error) => {
    console.log(error)
  })
})


app.post("/", function(req, res) {
  const burger = req.body.burger

  burgers.add(burger).then((result, error) => {
    if (error) {
      throw new Error(error)
    }
    res.redirect("/")
  }).catch((error) => {
    console.log(error)
  })
})

app.post("/devour", function(req, res) {
  const { burgerId } = req.body
console.log(burgerId)
  burgers.devour(burgerId).then((result, error) => {
    if (error) {
      throw new Error(error)
    }
    res.redirect("/")
  }).catch((error) => {
    console.log(error)
  })
})


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT)
})
