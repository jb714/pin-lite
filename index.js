const express = require('express');
const app = express();
const appRoutes = require('./pin-lite-backend/appRoutes');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Now listening on Port "  + port);
});

app.use(cors());

app.use(express.static(path.join(__dirname, 'pin-lite-client/build')));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'pin-lite-client/build/index.html'))
});
