var express = require("express");
var router = express.Router();

const testController = require("../controllers/test");

router.get('/',testController.test);

module.exports = router;