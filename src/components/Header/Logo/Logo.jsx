import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';
import { Link } from 'gatsby';

import { logoWrapperStyle, LogoSVG } from './Logo.styles';

const Logo = ({ isHomePage }) => {
  if (isHomePage) {
    return (
      <h1 css={logoWrapperStyle}>
        <span css={hideVisually}>Jedi Summit</span>

        <LogoSVG />
      </h1>
    );
  }

  return (
    <Link
      css={logoWrapperStyle}
      to='/'
      activeClassName='active'
      partiallyActive
    >
      <span css={hideVisually}>Home</span>

      <LogoSVG />
    </Link>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
Logo.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
};

export default Logo;
