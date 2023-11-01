const flightsDb = require('../models/flight')


const create = async (req, res) => {
  const newDestination = {
    airport: req.body.airport,
    arrival:new Date(req.body.arrival)
  };
  
  const flight = await flightsDb.findById(req.params.id);

  flight.destination.push(newDestination);
  try {
    await flight.save();
    res.redirect(`/flights/${req.params.id}`,);
  } catch (err) {
    console.log(err);
    res.redirect(`/flights/${req.params.id}`);
  }
};
module.exports = { create };


 
module.exports = {
  create
}