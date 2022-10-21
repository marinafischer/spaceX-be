const launchesService = require('../services/launchesService');

const getNextLaunch = async (_req, res, next) => {
  try {
    const nextLaunch = await launchesService.getNextLaunch();
    return res.status(200).json(nextLaunch);
  } catch (err) {
    next(err);
  }
};

module.exports = { getNextLaunch };
