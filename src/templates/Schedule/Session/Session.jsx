// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useQuery } from '@apollo/client';

// Client queries
import clientSwapcard from '../../../../apollo/clientSwapcard';
import sessionByIdQuery from '../../../../queries/swapcard/get-session-by-id-query.gql';

// components
import Layout from '../../../components/Layout';

// styles
// ...

/**
 * Template used to build each session page
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createScheduleSessionPages.js) and use that as variables GraphQL query.
 */
const Session = ({
  data,
  pageContext: { eventId, page, pageSize, planningIds },
}) => {
  /**
   * Query to fetch data from Swapcard API at client side only.
   * Useful if we want to get up-to-date data that may change during an event (e.g. time, room)
   */
  const { error, data: dataClient } = useQuery(sessionByIdQuery, {
    client: clientSwapcard,
    variables: { eventId, page, pageSize, planningIds },
  });

  /**
   * TODO: Try to implement a session with all information available below.
   * including the Layout and using or adding new components
   */

  return (
    <Layout>
      {error ? (
        <p>Error: ${error}</p>
      ) : (
        <pre>
          <code>{JSON.stringify(dataClient, null, 2)}</code>
        </pre>
      )}

      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </Layout>
  );
};

Session.propTypes = {
  data: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({
    eventId: PropTypes.string,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    planningIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  dataClient: PropTypes.shape({}).isRequired,
};

export default Session;

export const sessionQuery = graphql`
  query SessionById(
    $eventId: String!
    $page: Int!
    $pageSize: Int!
    $planningIds: [ID!]
  ) {
    swapcard {
      sessions: plannings(
        eventId: $eventId
        page: $page
        pageSize: $pageSize
        filters: { planningIds: $planningIds }
      ) {
        id
        beginsAt
        endsAt
        categories
        configuration {
          maxSeats
        }
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
        totalAttendees
        twitterHashtag
        type

        speakers {
          id
          firstName
          lastName
          email
          organization
          jobTitle
          photoUrl
          photoUrlSharp {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
