var express = require('express');
var app = express();
var appRoutes = express.Router();
var allPins = require('./Data/pins_formatted.json');

appRoutes.get("/", function(req,res){
  res.send("Welcome Home");
});

appRoutes.get("/allPins", function(req,res){
  res.json(allPins);
  console.log("Pins have been sent");
});

module.exports = appRoutes;
