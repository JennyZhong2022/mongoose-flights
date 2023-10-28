const mongoose = require('mongoose')

const Schema = mongoose.Schema


const flightSchema = new mongoose.Schema({
  airline: {
    type: String, enum: ['American', 'Southwest', 'United'],
    required: true 
  },
  airport: {
    type:String,enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function () {
      const today = new Date(); 
today.setFullYear(today.getFullYear() + 1); 
const nextYear = new Date(today);
return nextYear
    }
  }

})

module.exports=mongoose.model('Flight',flightSchema)