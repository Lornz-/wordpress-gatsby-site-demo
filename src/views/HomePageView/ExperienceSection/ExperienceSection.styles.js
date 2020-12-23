// vendors
import styled, { css } from 'styled-components';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const SectionContainer = styled.section`
  padding: 120px 0;
`;

export const Wrapper = styled.div`
  box-sizing: content-box;
  max-width: var(--max-container-width);
  margin: 0 auto;
  padding: 0 25px;
`;

// export const headingDellaStyle = css`
//   margin: 0;
//   margin-top: 1rem;

//   font-weight: ${fontWeights.bold};
//   font-size: ${rem(24, 18)};
//   font-family: ${fontFamilies.headingDella};
//   line-height: 1;
//   text-transform: uppercase;

//   background-image: linear-gradient(55deg, #ff4c20, #e76624 10%, #2394dc);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

export const subtitleStyle = css`
  color: ${colors.darkSienna600};
  font-weight: ${fontWeights.bold};
  font-size: 1rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
