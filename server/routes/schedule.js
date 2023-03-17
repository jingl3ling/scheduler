var express = require('express');
var router = express.Router();

const scheduleController = require('../controllers/schedule');

router.get('/:date&:time', scheduleController.getAvail);
router.put('/', scheduleController.reserve);
router.get('/reserve', scheduleController.getResrve);
router.get('/modify', scheduleController.modifyReserve);