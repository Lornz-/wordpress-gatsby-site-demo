const path = require(`path`);
const groupBy = require(`lodash/groupBy`);
const moment = require(`moment`);
const slugify = require(`../src/utils/strings/slugify.js`);

//  * This function queries Gatsby's GraphQL server and asks for
//  * All Plannings from Swapcard. If there are any GraphQL error it throws an error
//  * Otherwise it will return the plannings found 🙌
//  *
//  * We're passing in the utilities we got from createPages.
//  * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
//  */
const getPlannings = async ({ graphql, reporter, variables }) => {
  const { eventId, page, pageSize } = variables;
  const {
    data: {
      swapcard: { plannings },
    },
  } = await graphql(`
    {
      swapcard {
        plannings(
          eventId: "${eventId}"
          page: ${page}
          pageSize: ${pageSize}
        ) {
          beginsAt
          id
          title
        }
      }
    }
  `);

  if (plannings.errors) {
    reporter.panicOnBuild(
      `There was an error loading plannings from Swapcard`,
      plannings.errors
    );
    return;
  }

  // eslint-disable-next-line consistent-return
  return plannings;
};

const createSession = async ({ plannings, actions, variables }) => {
  const { createPage } = actions;
  const template = path.resolve('src/templates/Schedule/Session/Session.jsx');

  const { eventId, page, pageSize } = variables;

  plannings.map(async ({ id, title }) => {
    createPage({
      path: `/schedule/session/${slugify(title)}/`,
      component: template,
      context: {
        eventId,
        page,
        pageSize,
        planningIds: [id],
      },
    });
  });
};

const createSchedule = async ({ plannings, actions, variables }) => {
  const { createPage } = actions;
  const template = path.resolve('src/templates/Schedule/Schedule.jsx');

  // Group plannings by date
  const dayName = (item) =>
    moment(item.beginsAt, 'YYYY-MM-DD').format('DD:dddd');
  const planningsGroupByDate = groupBy(plannings, dayName);

  const eventDates = Object.keys(planningsGroupByDate);
  const totalPages = eventDates.length;

  eventDates.forEach(async (date, index, array) => {
    const pageNumber = index + 1;

    const getPagePath = (page) => {
      if (page > 0 && page <= totalPages) {
        return page === 1 ? `/schedule` : `/schedule/${page}`;
      }

      return null;
    };

    const getPlanningIds = () => {
      return planningsGroupByDate[date].reduce((ids, current) => {
        ids.push(current.id);
        return ids;
      }, []);
    };

    const getDatesPath = () => {
      return array.map((current, i) => ({
        date: current,
        path: getPagePath(i + 1),
      }));
    };

    const { eventId, page, pageSize } = variables;
    // createPage is an action passed to createPages
    // See https://www.gatsbyjs.com/docs/actions#createPage for more info
    createPage({
      path: getPagePath(pageNumber),
      // use the schedule template as the page component
      component: template,

      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        eventId,
        page,
        pageSize,
        planningIds: getPlanningIds(),
        nextPagePath: getPagePath(pageNumber + 1),
        previousPagePath: getPagePath(pageNumber - 1),
        allSchedules: getDatesPath(),
      },
    });
  });
};

module.exports = async ({ graphql, actions, reporter }) => {
  const variables = {
    eventId: `${process.env.SWAPCARD_EVENT_ID}`,
    page: 1,
    pageSize: 100,
  };

  const plannings = await getPlannings({ graphql, reporter, variables });

  if (!plannings.length) {
    return;
  }

  await createSession({ plannings, actions, variables });

  await createSchedule({ plannings, actions, variables });
};
