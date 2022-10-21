const getLaunches = require('../helpers/getLaunches');

const getNextLaunch = async () => {
  const nextLaunch = await getLaunches('next');
  return nextLaunch;
};

const getLatestLaunch = async () => {
  const latestLaunch = await getLaunches('latest');
  return latestLaunch;
};

const getUpcomingLaunches = async () => {
  const latestLaunch = await getLaunches('upcoming');
  return latestLaunch;
};

const getPastLaunches = async () => {
  const latestLaunch = await getLaunches('past');
  return latestLaunch;
};

module.exports = {
  getNextLaunch, getLatestLaunch, getUpcomingLaunches, getPastLaunches,
};
