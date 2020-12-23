import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { rem } from 'polished';

// styles
import zIndices from '../../styles/zIndices';

export const StyledHeader = styled.header`
  ${({ isHomePage }) =>
    isHomePage &&
    css`
      position: fixed;
      top: 0;

      z-index: ${zIndices.sticky};
    `}

  width: 100%;
`;

export const Container = styled.div`
  box-sizing: content-box;
  max-width: var(--max-container-width);
  margin: 0 auto;
  padding: 0 25px;
`;

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto 1fr;
  align-items: center;

  ::after {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: #81200f;

    content: '';
  }
`;

export const LogoWrapper = styled.div``;

export const StyledNav = styled.nav``;

export const PrimaryNavList = styled.ul`
  display: flex;
`;

export const NavListItem = styled.li`
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  padding: 10px;

  color: #81200f;
  font-weight: 700;
  font-size: ${rem(18, 18)};
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
`;
