const express = require('express');
const router = express.Router();
const flightController=require('../controllers/flights')

router.get('/', flightController.index);

router.get('/new', flightController.new)

router.get('/:id',flightController.show)

router.post('/',flightController.create)
/* GET users listing. */
router.delete('/:id',flightController.delete)

module.exports = router;
