const
  express = require("express"),
  handlebars = require("express-handlebars")

const
  app = express(),
  PORT = process.env.PORT || 8080


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


require("./controller/burger_controller")(app)


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT)
})


// --- Utility function ---

