var bodyParser = require("body-parser");
var path = require("path");

// var app = require("../app.js");
module.exports = function(app){
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/view.html"));
});
};
// module.exports = "html-app";