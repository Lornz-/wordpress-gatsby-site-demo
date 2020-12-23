const createPostPages = require('./createPostPages');
const createScheduleSessionPages = require('./createScheduleSessionPages');

module.exports = async (gatsbyUtilities) => {
  await Promise.all([
    createPostPages(gatsbyUtilities),
    createScheduleSessionPages(gatsbyUtilities),
  ]);
};
