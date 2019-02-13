const express = require('express');
const router = express.Router();

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
  res.send({ type: 'GET'})
});


// add a new ninja to the db
router.post('/ninjas', function (req, res) {
  res.send({ type: 'POST' })
});


// get a list of ninjas from the db
router.get('/ninjas', function (req, res) {
  res.send({ type: 'GET' })
});


// get a list of ninjas from the db
router.get('/ninjas', function (req, res) {
  res.send({ type: 'GET' })
});
