const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
 
// set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
 
app.use(bodyParse.json());  
 
// initialize routes
app.use('/api', routes) 

//error handling middleware
app.use( (err, req, res, next) => {
  //console.log(err)
  res.status(422).send({ error: err.message });
})

// listen fro request 

app.listen(process.env.port || 5000, function () {
  console.log('now listening for requests');
});
