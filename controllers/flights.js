const flightsDb = require('../models/flight')


const index = async (req, res) => {
  const flights= await flightsDb.find({}).sort({departs: 1 })
  res.render('flights/index',{flights})
}

const show = async (req, res) => {
  const flight = await flightsDb.findById(req.params.id);
  
  flight.destination.sort((a,b)=>new Date(a.arrival)-new Date(b.arrival))
  // Format the default date for the input field
  const today = new Date(); 
today.setFullYear(today.getFullYear() + 1); 
const dt = new Date(today);
  let arrivalTime = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  arrivalTime += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  console.log('date',arrivalTime);
 
 
  res.render('flights/show',{flight,arrivalTime })
}

const newFlight = (req, res) => {
  // Create a new Flight object with default values
  const newFlight = new flightsDb();
  // Format the default date for the input field
  const dt = newFlight.departs;
  let departTime = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departTime += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  console.log('date',departTime);
 

  res.render('flights/new', { errorMsg: '', departTime });
}




const create = async (req, res) => {
 const{arline, airport,destination,flightNo,departs}=req.body
  try {
    await flightsDb.create(req.body);
 res.redirect('/flights'); }
    catch (err) {
    
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
 
}

const deleteOne = async (req, res) => {
  try {
    await flightsDb.findByIdAndDelete(req.params.id)
    res.redirect('/flights')
  }
  catch (err) {
    console.log(err);
    res.redirect('flights', { errorMsg: err.message });
  }
}

module.exports = {
  index,create,new:newFlight,show,delete:deleteOne
}