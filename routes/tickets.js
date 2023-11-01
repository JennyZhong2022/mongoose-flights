const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/tickets')

router.get('/tickets/new',ticketController.new)

router.post('/tickets',ticketController.create)

router.post('/flights/:flight_id/tickets', ticketController.addToTicket);

module.exports = router;