// vendors
import styled from 'styled-components';
import { rem } from 'polished';

// utils
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';

export const Section = styled.section`
  min-height: 30vh;

  background-color: #391611;
`;

export const Container = styled.div`
  box-sizing: content-box;
  max-width: var(--max-container-width);
  margin: 0 auto;
  padding: 0 25px;
`;

export const Wrapper = styled.div`
  min-width: 0;
  margin: 0 0 0 auto;
  padding: 2rem 1.5rem 2rem 0;

  color: ${colors.white};
  font-size: ${rem(20, 18)};
  line-height: ${36 / 20};
  letter-spacing: 0.5px;

  ${greaterThan(640)} {
    max-width: 65%;
  }
`;
