const launchesModel = require('../models/launchesModel');

const getNextLaunch = async () => {
  const {
    name, date_utc: date, id, rocket, links,
  } = await launchesModel.getNextLaunch();
  const response = {
    id,
    name,
    rocket,
    date,
    image: links.patch.small,
  };
  return response;
};

const getLatestLaunch = async () => {
  const {
    name, date_utc: date, id, rocket, links,
  } = await launchesModel.getLatestLaunch();
  const response = {
    id,
    name,
    rocket,
    date,
    image: links.patch.small,
  };
  return response;
};

module.exports = { getNextLaunch, getLatestLaunch };
