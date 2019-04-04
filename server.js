// Dependencies
var express = require("express");
// Set Handlebars.
var exphbs = require("express-handlebars");
// Setting Express to app
var app = express();

// Setting PORT 8080
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Starting and listening to 8080
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
