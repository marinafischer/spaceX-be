const express = require('express');
const { getNextLaunch, getLatestLaunch, getUpcomingLaunches } = require('../controllers/launchesController');

const router = express.Router();

router.get('/next', getNextLaunch);

router.get('/latest', getLatestLaunch);

router.get('/upcoming', getUpcomingLaunches);

module.exports = router;
