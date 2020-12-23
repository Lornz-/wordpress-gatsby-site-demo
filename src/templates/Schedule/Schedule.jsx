// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import moment from 'moment';

// components
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

// styles
import {
  Container,
  List,
  ListItem,
  LeftWrapper,
  RightWrapper,
  Wrapper,
  StyledImage,
  CalendarList,
  CalendarListItem,
  StyledLink,
} from './Schedule.styles';
import { fontWeights } from '../../styles/typography';
import { colorFullHeadingStyle } from '../../styles/global';

/**
 * Template used to display daily schedules from Swapcard API
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createScheduleSessionPages.js) and use that as variables GraphQL query.
 */
const Schedule = ({ data, pageContext: { allSchedules } }) => {
  const {
    swapcard: { plannings },
  } = data;

  // Re-arrange values from the allSchedules array the way we want to use it in our template
  const schedules = allSchedules.map((schedule) => ({
    dayNumber: schedule.date.split(':')[0],
    dayName: schedule.date.split(':')[1],
    ...schedule,
  }));

  // Re-arrange values from the schedule array the way we want to use it in our template
  const schedule = plannings.map((planning) => ({
    thumbnail: planning.speakers[0].photoUrlSharp?.childImageSharp?.fixed,
    ...planning,
  }));

  const getFormattedTime = (str) => {
    const date = new Date(str);
    return moment(date).format('HH:mm');
  };

  const getFormattedDateNumber = (str) => {
    const date = new Date(str);
    return moment(date).format('DD');
  };

  if (!schedule.length) {
    return (
      <Layout>
        <SEO title='Event schedule' />

        <Container>
          <p>No session planned.</p>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title='Event schedule' />

      <Container>
        <Wrapper>
          <CalendarList maxItems={schedules.length}>
            {schedules.map((current) => {
              return (
                <CalendarListItem key={current.path}>
                  <StyledLink
                    to={current.path}
                    active={
                      current.dayNumber ===
                      getFormattedDateNumber(schedule[0].beginsAt)
                    }
                  >
                    <div>{current.dayNumber}</div>
                    <small>{current.dayName}</small>
                  </StyledLink>
                </CalendarListItem>
              );
            })}
          </CalendarList>

          <List>
            {schedule.map((session) => (
              <ListItem key={session.id}>
                <LeftWrapper>
                  <small
                    css={`
                      font-weight: ${fontWeights.semiBold};
                      letter-spacing: 0.5px;
                    `}
                  >
                    {getFormattedTime(session.beginsAt)}
                  </small>
                </LeftWrapper>

                <RightWrapper>
                  <div
                    css={`
                      position: relative;

                      grid-column: 1 / span 2;
                      grid-row: 1;

                      display: flex;
                      flex-direction: row;
                      justify-content: space-between;

                      padding: 0.75rem 0;

                      border-top: 1px solid;

                      font-size: 0.7rem;
                      font-weight: ${fontWeights.semiBold};
                      line-height: 1.1;
                      letter-spacing: 0.04rem;
                      text-transform: uppercase;

                      > * {
                        margin: 0;
                      }
                    `}
                  >
                    <p>
                      {session.categories[1]?.split('-').join(' ') ||
                        session.categories[0]?.split('-').join(' ')}
                    </p>

                    <p>{session.place}</p>
                  </div>

                  <div
                    css={`
                      grid-column: 1;
                      grid-row: 2;
                    `}
                  >
                    <h2
                      css={`
                        margin-bottom: 0;

                        ${colorFullHeadingStyle};
                      `}
                    >
                      {session.title}
                    </h2>

                    <small
                      css={`
                        margin: 0;

                        font-weight: ${fontWeights.bold};
                      `}
                    >{`${session.speakers[0].firstName} ${session.speakers[0].lastName}`}</small>

                    <p>{session.description}</p>
                  </div>

                  {session.thumbnail && (
                    <div
                      css={`
                        grid-column: 2;
                        grid-row: 2;
                      `}
                    >
                      <StyledImage fixed={session.thumbnail} />
                    </div>
                  )}
                </RightWrapper>
              </ListItem>
            ))}
          </List>
        </Wrapper>
      </Container>

      {/* <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre> */}
    </Layout>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
Schedule.propTypes = {
  data: PropTypes.shape({
    swapcard: PropTypes.shape({
      plannings: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
    allSchedules: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Schedule;

/**
 * Query to get schedules from a list of IDs
 * @param {string} $eventId — Id of the Swapcard event
 * @param {number} $page — Index of our loop is the offset of which schedules we want to display
 * @param {number} $pageSize — Number of schedules we want to display per page
 * @param {string[]} $planningIds — List of schedule Ids we want to filter from
 * See @link gatsby/createScheduleSessionPages.js
 */
export const scheduleQuery = graphql`
  query ScheduleByIds(
    $eventId: String!
    $page: Int!
    $pageSize: Int!
    $planningIds: [ID!]
  ) {
    swapcard {
      plannings(
        eventId: $eventId
        page: $page
        pageSize: $pageSize
        filters: { planningIds: $planningIds }
      ) {
        id
        beginsAt
        endsAt
        categories
        description
        descriptionTranslations {
          language
          value
        }
        htmlDescription
        isPrivate
        place
        title
        titleTranslations {
          language
          value
        }
        type

        speakers {
          id
          firstName
          lastName
          organization
          jobTitle
          photoUrl
          photoUrlSharp {
            childImageSharp {
              fixed(width: 200, height: 200, quality: 99) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
