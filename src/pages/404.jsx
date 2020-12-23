// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Layout from '../components/Layout';
import SEO from '../components/Seo';

/**
 * Default 404 Not Found page
 * @param {Object} location — Pass the current page address (URL) for further processing
 * like changing some part of the DOM depending on the current page.
 */
const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title='404: Not Found' />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

NotFoundPage.defaultProps = {
  location: {
    pathname: undefined,
  },
};

export default NotFoundPage;
