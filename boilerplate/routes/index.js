const express = require('express');
const router = express.Router();
const Route = require('./route');

router.use('/sample', Route);

module.exports = router;
