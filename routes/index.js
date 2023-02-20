var express = require('express');
var router = express.Router();
var personasrouters = require('./personas-routes');

router.use('/', personasrouters);

module.exports = router;
