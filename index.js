const express = require('express');
 
// set up express app

const app = express();

// listen fro request

app.listen(process.env.port || 4000, function () {
  console.log('now listening for requests');
});
