
const flightsDb = require('../models/flight')
const ticketDb = require('../models/ticket')

const newTicket = async(req, res) => {
  const tickets = await ticketDb.find({})
  res.render('flight-tickets/new', {
    tickets
  })
}

const create = async (req, res) => {
  try {
    await ticketDb.create(req.body)
  } catch (error) {
    console.log(error);
  }
  res.redirect('/tickets/new')
}


const addToTicket = async (req, res) => {
  try {
    const flight = await flightsDb.findById(req.params.flight_id);
    if (!flight) return res.status(404).send("Flight not found");

    const newTicket =  await ticketDb.findById(req.body.ticketId);
    
    newTicket.flight = flight._id;
    console.log(newTicket);
    await newTicket.save();
    
    res.redirect(`/flights/${req.params.flight_id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};



module.exports = {
  new: newTicket,
  create,
  addToTicket,
}