const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create geolocation Schema

const GeoSchema = new Schema({
  type: {
    type: String
    default: "Point",
  },
  coordinates: {},
})

"geometry": {
  "type": "Point",
    "coordinates": [125.6, 10.1]
}

// create ninja Schema & model
const NinjaSchema = new Schema({
  name: { 
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  long: {},
  lat: {}
  // add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;