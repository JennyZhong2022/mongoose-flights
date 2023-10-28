var express = require('express');
var router = express.Router();
const flightController=require('../controllers/flights')


router.get('/new', flightController.new)

router.post('/',flightController.create)
/* GET users listing. */
router.get('/', flightController.index);



module.exports = router;
