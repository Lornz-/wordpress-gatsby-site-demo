// vendors
import styled, { css } from 'styled-components';

// styles
import colors from '../../../styles/colors';
import { grid } from '../../../styles/layouts';
import { fontWeights } from '../../../styles/typography';

export const SectionContainer = styled.section``;

export const TextWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding: 120px 50px 35px 0;

  color: ${colors.white};
`;

export const GridContainer = styled.div`
  ${grid('400px', '20px', 3)};

  /* margin-left: 20px; */
`;

export const subtitleStyle = css`
  color: ${colors.white};
  font-weight: ${fontWeights.bold};
  font-size: 1rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
