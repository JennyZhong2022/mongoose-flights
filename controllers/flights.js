const flightsDb = require('../models/flight')



const index = async (req, res) => {
  const flights= await flightsDb.find({})
  res.render('flights/index',{flights})
}

const newFlight = (req, res) => {
  // Create a new Flight object with default values
  const newFlight = new flightsDb();
  // Format the default date for the input field
  const dt = newFlight.departs;
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  console.log('date',departsDate);
 

  res.render('flights/new', { errorMsg: '', departsDate });
}




const create = async (req, res) => {
 const{arline, airport,flightNo,departs}=req.body
  try {
    await flightsDb.create(req.body);
 res.redirect('/flights'); }
    catch (err) {
    
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
 
  
}



module.exports = {
  index,create,new:newFlight
}