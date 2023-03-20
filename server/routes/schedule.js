var express = require('express');
var router = express.Router();

const scheduleController = require('../controllers/schedule');

router.get('/', scheduleController.getAvail);
router.put('/reserve', scheduleController.reserve);
router.get('/reserve', scheduleController.getReserve);
router.get('/modify', scheduleController.modifyReserve);

module.exports=router;