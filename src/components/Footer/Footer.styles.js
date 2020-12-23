// vendors
import styled from 'styled-components';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';

export const Container = styled.footer`
  /* height: 90px; */
  margin-top: 20px;

  padding-top: 35px;
  padding-bottom: 35px;

  background-color: ${colors.darkSienna900};
`;

export const Wrapper = styled.div`
  box-sizing: content-box;
  max-width: var(--max-container-width);
  margin: 0 auto;
  padding: 0 25px;
`;

export const Copyright = styled.p`
  color: ${colors.white};
  font-weight: ${fontWeights.thin};
`;
