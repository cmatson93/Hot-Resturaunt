var bodyParser = require("body-parser");
var path = require("path");

var waitingListArray = require("../data/waitlist.js");
var reservationsArray = require("../data/tables.js");

// var app = require("../app.js");
module.exports = function(app){
// Search for Specific Character (or all reservations) - provides JSON
app.get("/api/reservations", function(req, res) {

  return res.json(reservationsArray);

});

app.get("/api/waitingList", function(req, res) {

  return res.json(waitingListArray);
  
});

app.get("/api/clear", function(req, res) {

  reservationsArray = [];
  waitingListArray = [];
  res.sendFile(path.join(__dirname, "public/view.html"));
  
});

// // Create New reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware

  if (reservationsArray.length === 5) {

    var newTable = req.body;
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);


    waitingListArray.push(newTable);
    

    var response = {isWaitListed: false};

    res.json(response);
    
  }
  else {

    var newTable = req.body;
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);


    reservationsArray.push(newTable);


    var response = {isWaitListed: true};

    res.json(response);
  }

});
};

// module.exports = "api-app";

