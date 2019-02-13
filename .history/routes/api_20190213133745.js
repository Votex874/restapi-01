const express = require('express');
const router = express.Router();

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
  res.send({ type: 'GET'})
});

