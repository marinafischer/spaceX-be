const express = require('express');
const {
  getNextLaunch, getLatestLaunch, getUpcomingLaunches, getPastLaunches,
} = require('../controllers/launchesController');

const router = express.Router();

router.get('/next', getNextLaunch);

router.get('/latest', getLatestLaunch);

router.get('/upcoming', getUpcomingLaunches);

router.get('/past', getPastLaunches);

module.exports = router;
