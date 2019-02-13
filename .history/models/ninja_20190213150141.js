const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create ninja Schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true]
  }
})