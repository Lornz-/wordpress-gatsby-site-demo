// vendors
import styled from 'styled-components';
import { rem } from 'polished';

// utils
import { greaterThan } from '../../../utils/mediaQuery';

// images
import IconCalendar from '../../../images/IconCalendar';

// styles
import { fontFamilies } from '../../../styles/typography';
import colors from '../../../styles/colors';

export const SupHeading = styled.p`
  margin: 0;
  margin-bottom: 0.65rem;

  color: ${colors.fireOrange500};
  font-weight: bold;
  font-size: 0.75rem;
  font-family: ${fontFamilies.headingMichroma};
  line-height: 1.2;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const Heading = styled.h2`
  margin: 0;

  font-size: ${rem(34)};
  font-family: ${fontFamilies.headingDella};
  line-height: 1;
  text-transform: uppercase;

  background-image: linear-gradient(55deg, #ff4c20, #e76624 25%, #2394dc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${greaterThan(640)} {
    padding-right: 18%;

    font-size: ${rem(54)};
  }
`;

export const EventDatesWrapper = styled.div`
  display: flex;

  margin-top: 1em;
`;

export const Icon = styled(IconCalendar)`
  width: 36px;
  margin-right: 1em;

  color: ${colors.fireOrange500};
`;

export const Dates = styled.span`
  color: ${colors.white};
  font-weight: 700;
  font-size: 1.5em;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
