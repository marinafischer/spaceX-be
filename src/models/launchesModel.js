const getLaunches = require('../helpers/getLaunches');

const getNextLaunch = async () => {
  const nextLaunch = await getLaunches('next');
  return nextLaunch;
};

module.exports = { getNextLaunch };
