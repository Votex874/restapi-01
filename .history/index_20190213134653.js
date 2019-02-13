const express = require('express');
const routes = require('./routes/api')
 
// set up express app

const app = express();

app.use(routes)



// listen fro request

app.listen(process.env.port || 5000, function () {
  console.log('now listening for requests');
});
