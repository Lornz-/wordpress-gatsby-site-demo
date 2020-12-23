import { css } from 'styled-components';
import { em } from 'polished';

import breakpoints from './breakpoints';

export const box = (color, backgroundColor, borderWidth, space) => {
  return css`
    padding: ${space}rem;

    color: ${color};

    background-color: ${backgroundColor};
    border: ${borderWidth}px solid currentColor;

    > * {
      color: inherit;
    }
  `;
};

export const stack = (space) => {
  return css`
    > * + * {
      margin-top: ${space};
    }
  `;
};

export const grid = (minWidth, gap, length = 1) => {
  return css`
    /* IE11 fallback */
    @media screen and (-ms-high-contrast: active),
      screen and (-ms-high-contrast: none) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      margin: calc(${gap} / 2 * -1);

      > * {
        width: calc((100% / ${length}) - ${gap});
        min-width: ${minWidth};
        margin: calc(${gap} / 2);
      }
    }

    /* Modern browsers */
    @supports (grid-gap: 0) {
      display: grid;
      grid-gap: ${gap};
      grid-template-columns: repeat(
        auto-fit,
        minmax(min(${minWidth}, 100%), 1fr)
      );
    }
  `;
};

export const center = (space, maxWidth = '60ch') => {
  return css`
    box-sizing: content-box;
    max-width: ${maxWidth};
    margin-right: auto;
    margin-left: auto;
    padding-right: ${space};
    padding-left: ${space};
  `;
};

export const switcher = (limit, space, threshold = em(breakpoints[0])) => {
  const adjustedSpace = space === 0 ? '0px' : space;

  return css`
    > * {
      display: flex;
      flex-wrap: wrap;
      margin: calc((${adjustedSpace} / 2) * -1);
    }

    > * > * {
      flex-basis: calc((${threshold} - (100% - ${adjustedSpace})) * 999);
      flex-grow: 1;
      margin: calc(${adjustedSpace} / 2);
    }

    > * > :nth-last-child(n + ${limit} + 1),
    > * > :nth-last-child(n + ${limit} + 1) ~ * {
      flex-basis: 100%;
    }
  `;
};

export const sidebar = (
  sideWidth,
  side = 'left',
  contentMin = '50%',
  space,
  noStretch = false
) => {
  const adjustedSpace = space === 0 ? '0px' : space;

  return css`
    display: flex;
    flex-wrap: wrap;
    align-items: ${noStretch ? 'flex-start' : ''};

    margin: calc(${adjustedSpace} / 2 * -1);

    > * {
      flex-grow: 1;
      ${sideWidth ? `flex-basis: ${sideWidth}` : ''};

      margin: calc(${adjustedSpace} / 2);
    }

    > ${side !== 'left' ? ':first-child' : ':last-child'} {
      flex-basis: 0;
      flex-grow: 999;

      min-width: calc(${contentMin} - ${adjustedSpace});
    }
  `;
};

export const cluster = (space, justify = 'flex-start', align = 'center') => {
  const adjustedSpace = space === 0 ? '0px' : space;

  return css`
    overflow: hidden;

    > * {
      display: flex;
      flex-wrap: wrap;
      align-items: ${align};
      justify-content: ${justify};

      margin: calc(${adjustedSpace} / 2 * -1);
    }

    > * > * {
      margin: calc(${adjustedSpace} / 2);
    }
  `;
};
