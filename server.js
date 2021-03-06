// Dependencies
// =============================================================
var express = require("express");

var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var waitingListArray = require("./data/waitlist.js");
// var reservationsArray = require("./data/tables.js");
require("./routes/html-server.js")(app);
require("./routes/api-server.js")(app);




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = "server";
