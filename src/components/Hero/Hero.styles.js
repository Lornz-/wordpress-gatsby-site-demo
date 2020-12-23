import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledHeader = styled.header`
  position: relative;

  display: grid;
  grid-template-rows: calc(70px + 37px + 0.25rem) 1fr auto;
  grid-template-columns:
    [full-start] minmax(1rem, 1fr) [main-start] var(--max-container-width)
    [main-end] minmax(1rem, 1fr) [full-end];
`;

export const ImageWrapper = styled.div`
  position: relative;

  grid-row: 1/-1;
  grid-column: full;

  width: 100%;
  height: 100%;
  overflow: hidden;

  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: block;

    background: linear-gradient(180deg, #39161100, #391611);

    content: '';
  }
`;

export const StyledImage = styled(Img)`
  height: 70vh;
`;

export const TextWrapper = styled.div`
  position: relative;

  grid-row: 2;
  grid-column: main;
  align-self: end;
`;
