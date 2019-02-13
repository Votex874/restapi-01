const express = require('express');
const routes = require('./routes/api');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
 
// set up express app

const app = express();

//connect to mongodb
mongoose.connect('mongodb://locaclhost/ninjago');
mongoose.Promise = global.Promise

app.use(bodyParse.json());

// initialize routes
app.use('/api', routes)



// listen fro request

app.listen(process.env.port || 5000, function () {
  console.log('now listening for requests');
});
