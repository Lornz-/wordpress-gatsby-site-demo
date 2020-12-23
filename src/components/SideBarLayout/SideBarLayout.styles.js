import styled, { css } from 'styled-components';
import { lessThan } from '../../utils/mediaQuery';

import { sidebar } from '../../styles/layouts';

// const sideWidth = 480;

// export const sideGutter = 30;

// export const sideBreakpoint = sideWidth * 2 + sideGutter;

export const Container = styled.div`
  ${({ spaced, sideWidth, gutterWidth, contentWidth }) =>
    sidebar(sideWidth, 'left', contentWidth, spaced ? gutterWidth : 0)}

  ${({ contentWidth }) => css`
    > * {
      min-width: ${contentWidth};
    }
  `}

  ${({ spaced, sideWidth, gutterWidth, contentWidth }) =>
    spaced &&
    css`
      > * {
        /* Subtract 0.1px to avoid weird effect with calc and rem on Firefox */
        min-width: calc(${contentWidth} - ${gutterWidth} - 0.1px);
      }

      ${lessThan(sideWidth * 2 + gutterWidth)} {
        margin-top: -${15 / 16}rem;
        margin-bottom: -${15 / 16}rem;

        > * {
          margin-top: ${15 / 16}rem;
          margin-bottom: ${15 / 16}rem;
        }
      }
    `}
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;
