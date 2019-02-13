const express = require('express');
 
// set up express app

const app = express();

app.get('/', function(req, res){
  console.log('GET request');
  res.end();
})

// listen fro request

app.listen(process.env.port || 4000, function () {
  console.log('now listening for requests');
});
