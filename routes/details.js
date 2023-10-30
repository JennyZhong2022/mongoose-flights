const express = require('express');
const router = express.Router();
const flightController = require('../controllers/details')

router.post('/:id/details',flightController.create)

module.exports=router