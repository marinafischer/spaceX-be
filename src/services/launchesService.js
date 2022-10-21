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

const getUpcomingLaunches = async () => {
  const data = await launchesModel.getUpcomingLaunches();
  const response = data.map((element) => ({
    id: element.id,
    name: element.name,
    rocket: element.rocket,
    date: element.date_utc,
    image: element.links.patch.small,
  }));

  return response;
};

module.exports = { getNextLaunch, getLatestLaunch, getUpcomingLaunches };
