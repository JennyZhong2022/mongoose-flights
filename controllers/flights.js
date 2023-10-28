const flightsDb = require('../models/flight')



const index = async (req, res) => {
  const flights= await flightsDb.find({})
  res.render('flights/index',{flights})
}

const newFlight = (req, res) => {

  res.render('flights/new',{errorMsg:''})
}



const create = async (req, res) => {
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