var express = require('express');
var app = express();
const path = require('path');
var cors = require('cors');

var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Now listening on Port 8080")
});

app.use(cors());

app.use(express.static(path.join(__dirname, 'pin-lite-client/build')));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'pin-lite-client/build/index.html'))
});
