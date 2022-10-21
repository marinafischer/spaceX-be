const launchesService = require('../services/launchesService');

const getNextLaunch = async (_req, res, next) => {
  try {
    const nextLaunch = await launchesService.getNextLaunch();
    return res.status(200).json(nextLaunch);
  } catch (err) {
    next(err);
  }
};

const getLatestLaunch = async (_req, res, next) => {
  try {
    const nextLaunch = await launchesService.getLatestLaunch();
    return res.status(200).json(nextLaunch);
  } catch (err) {
    next(err);
  }
};

const getUpcomingLaunches = async (_req, res, next) => {
  try {
    const nextLaunch = await launchesService.getUpcomingLaunches();
    return res.status(200).json(nextLaunch);
  } catch (err) {
    next(err);
  }
};

module.exports = { getNextLaunch, getLatestLaunch, getUpcomingLaunches };
