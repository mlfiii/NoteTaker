// Dependencies
var express = require("express");
const fs = require("fs");
const util = require("util");
const db = require("./db/tableData");
const path = require("path");
// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

