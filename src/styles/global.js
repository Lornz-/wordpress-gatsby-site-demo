// vendors
import { css, createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

import { fontFamilies, fontWeights, lineHeights } from './typography';
import { lessThan, greaterThan } from '../utils/mediaQuery';
import breakpointsRange from '../utils/breakpointsRange';
import colors from './colors';

export const rootStyles = css`
  /*  A = (18 - 16) / (1470 - 320) * 100
      B = 18 - (((18 - 16) / (1470 - 320)) * 1470) - 1rem{16}
      calc(1rem + Avw + b) */
  --font-size: calc(1rem + 0.17391304vw - 0.55652174px);
  --line-height: ${lineHeights.body};
  --container-gutter: 25px;
  --grid-width: 100%;
  --max-container-width: calc(var(--grid-width) - var(--container-gutter) * 2);

  ${greaterThan(1470)} {
    --grid-width: 1470px;
  }
`;

export const htmlStyles = css`
  font-size: var(--font-size);
  line-height: var(--line-height);
  scroll-behavior: smooth;

  ${lessThan(480)} {
    font-size: ${rem(16)};
  }

  ${greaterThan(1590)} {
    font-size: ${rem(18)};
  }
`;

export const bodyStyles = css`
  font-family: ${fontFamilies.body};
`;

export const colorFullTextStyle = css`
  background-image: linear-gradient(55deg, #ff4c20, #e76624 10%, #2394dc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const headingDellaStyle = css`
  margin: 0;
  margin-top: 1rem;

  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.headingDella};
  line-height: 1;
  text-transform: uppercase;
`;

export const colorFullHeadingStyle = css`
  ${headingDellaStyle};
  ${colorFullTextStyle};
`;

export const h1Style = css``;

export const h2Style = css`
  font-weight: ${fontWeights.regular};
  font-size: ${rem(44, 18)};
  line-height: 1;
`;

export const h3Style = css``;

export const h4Style = css``;

export const h5Style = css``;

export const h6Style = css``;

export const introStyle = css``;

export const unbreakableStringStyle = css`
  word-break: keep-all;
`;

export const unstyledLinkStyle = css`
  color: inherit;
  text-decoration: inherit;
`;

export const magnifyStyle = css`
  font-weight: ${fontWeights.bold};
  line-height: 1.4;
  text-transform: uppercase;

  ${breakpointsRange(
    [
      {
        prop: 'fontSize',
        sizes: [18, 40],
        bases: [16, 18],
        unit: 'rem',
      },
    ],
    [480, 1120]
  )};
`;

export const titleStyle = css``;

export const figCaptionStyle = css``;

export const linkStyle = css`
  ${unstyledLinkStyle};

  color: ${colors.white};

  @media (prefers-reduced-motion: no-preference) {
    transition: color 0.4s ease;
  }

  &:hover,
  &:focus {
    color: ${colors.primary};
  }
`;

export const externalLinkStyle = css``;

export const paragraphStyle = css``;

export const unstyledListStyle = css`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const unorderListStyle = css`
  ${unstyledListStyle};
`;

export const orderListStyle = css``;

export const GlobalStyle = createGlobalStyle`
  :root {
    ${rootStyles};
  }

  html {
    ${htmlStyles};
  }

  body {
    ${bodyStyles};
  }
`;
