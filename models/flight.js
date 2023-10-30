const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
  airport: { type: String,enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
  arrival: {
    type: Date,
    }
},
{timestamps:true}
)


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
  destination:[destinationSchema],
  departs: {
    type: Date,
    default: function () {
      const today = new Date(); 
today.setFullYear(today.getFullYear() + 1); 
const nextYear = new Date(today);
return nextYear
    }
  }
 
}, {timestamps:true})

module.exports=mongoose.model('Flight',flightSchema)