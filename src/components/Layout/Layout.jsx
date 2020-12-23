import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../styles/global';

import '@csstools/normalize.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import Header from '../Header';
import Footer from '../Footer';

/**
 * This is the main layout of the website. Layout components are for sections of the site
 * that we want to share across multiple pages (e.g. header, footer, sidebar, etc.).
 * @param {Object} location — Pass the current page address (URL) for further processing
 * like changing some part of the DOM depending on the current page.
 * @param {React.ReactNode} children — All React node elements passed to Layout
 */
const Layout = ({ location, children }) => {
  return (
    <>
      <GlobalStyle />

      <Header location={location} />

      <main>{children}</main>

      <Footer />
    </>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Layout.defaultProps = {
  location: {
    pathname: undefined,
  },
};

export default Layout;
