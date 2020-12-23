// vendors
import styled, { css } from 'styled-components';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';

export const textStyle = css`
  color: ${colors.darkSienna700};
  font-weight: ${fontWeights.bold};
  font-size: 1.75rem;
`;

export const Container = styled.div``;

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  ${({ bgColor }) =>
    bgColor
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: ${bgColor};

          ::before {
            float: left;
            padding-top: 86.4%;
            content: '';
          }
        `
      : css`
          ::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            display: block;

            background: linear-gradient(
              180deg,
              #130c0e00,
              #130c0e57,
              #130c0ec4 95%
            );

            content: '';
          }
        `}
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
`;

export const Heading = styled.h3`
  z-index: 1;

  align-self: flex-end;

  width: 100%;

  margin-left: 1.5rem;

  color: ${colors.white};
  font-weight: ${fontWeights.bold};
  letter-spacing: 0.5px;
`;
