const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;
const allPins = require('./Data/pins_formatted.json');

app.listen(port, function(){
  console.log("Now listening on Port "  + port);
});

app.use(cors());

app.use(express.static(path.join(__dirname, 'pin-lite-client/build')));

app.get("/", function(req,res){
  res.send("Welcome Home");
});

app.get("/allPins", function(req,res){
  res.json(allPins);
  console.log("Pins have been sent");
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'pin-lite-client/build/index.html'))
});
