const express = require('express');
const { getNextLaunch } = require('../controllers/launchesController');

const router = express.Router();

router.get('/next', getNextLaunch);

module.exports = router;
