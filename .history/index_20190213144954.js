const express = require('express');
const routes = require('./routes/api');
const bodyParse = require('body-parser');
 
// set up express app

const app = express();

app.use(bodyParse.json());

// initialize routes
app.use('/api', routes)



// listen fro request

app.listen(process.env.port || 5000, function () {
  console.log('now listening for requests');
});
