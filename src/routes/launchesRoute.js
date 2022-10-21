const express = require('express');
const { getNextLaunch, getLatestLaunch } = require('../controllers/launchesController');

const router = express.Router();

router.get('/next', getNextLaunch);

router.get('/latest', getLatestLaunch);

module.exports = router;
