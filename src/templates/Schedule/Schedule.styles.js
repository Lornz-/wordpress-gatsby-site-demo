import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { unstyledListStyle, unstyledLinkStyle } from '../../styles/global';
import { fontWeights } from '../../styles/typography';
import colors from '../../styles/colors';

export const Container = styled.div`
  box-sizing: content-box;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 25px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: auto 1fr;
  justify-items: center;

  padding-top: 120px;
  padding-bottom: 70px;
`;

export const List = styled.ul`
  ${unstyledListStyle};

  > * + * {
    margin-top: 3rem;
  }
`;

export const ListItem = styled.li`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 45px 1fr;
`;

export const LeftWrapper = styled.div`
  position: relative;

  > * {
    position: absolute;
    top: -11px;
  }
`;

export const RightWrapper = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 1fr auto;
`;

export const StyledImage = styled(Img)``;

export const CalendarList = styled.ol`
  ${unstyledListStyle};

  display: grid;
  grid-gap: 2rem;

  ${({ maxItems }) =>
    maxItems &&
    css`
      grid-template-columns: repeat(${maxItems}, 1fr);
    `}
`;

export const CalendarListItem = styled.li`
  padding: 1rem 0.5rem;
`;

export const StyledLink = styled(Link)`
  ${unstyledLinkStyle};

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 95px;
  height: 95px;

  font-weight: ${fontWeights.regular};
  letter-spacing: 0.5px;
  text-transform: uppercase;

  border-radius: 50%;

  ${({ active }) =>
    active &&
    css`
      color: ${colors.white};

      ::after {
        position: absolute;
        top: 0;
        z-index: -1;

        width: 115%;
        height: 115%;

        background: #81200f;
        border-radius: inherit;

        content: '';
      }
    `}
`;
