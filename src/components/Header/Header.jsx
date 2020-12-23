// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import {
  Container,
  Wrapper,
  StyledHeader,
  LogoWrapper,
  StyledNav,
  PrimaryNavList,
  NavListItem,
  StyledLink,
} from './Header.styles';

// components
import Logo from './Logo';

const navItemPrimary = [
  {
    id: 'schedule',
    label: 'Schedule',
    slug: '/schedule',
  },
  {
    id: 'blog',
    label: 'Blog',
    slug: '/blog',
  },
];

/**
 * Main Header of the website with primary navigation
 * @param {Object} location — Pass the current page address (URL) for further processing
 * like changing some part of the DOM depending on the current page.
 */
const Header = ({ location }) => {
  const isHomePage = !!location.pathname && location.pathname === '/';

  return (
    <StyledHeader isHomePage={isHomePage}>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <Logo isHomePage={isHomePage} />
          </LogoWrapper>

          <StyledNav>
            <PrimaryNavList>
              {navItemPrimary.map((item) => (
                <NavListItem key={item.id}>
                  <StyledLink
                    to={item.slug}
                    activeClassName='active'
                    partiallyActive
                  >
                    {item.label}
                  </StyledLink>
                </NavListItem>
              ))}
            </PrimaryNavList>
          </StyledNav>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Header.defaultProps = {
  location: {
    pathname: undefined,
  },
};

export default Header;
