import styled from 'styled-components';
import { Link } from 'gatsby';

import {
  unstyledLinkStyle,
  headingDellaStyle,
  h2Style,
} from '../../styles/global';

export const Container = styled.div`
  box-sizing: content-box;
  max-width: var(--max-container-width);
  margin: 0 auto;
  padding: 0 25px;
`;

export const Wrapper = styled.div``;

export const List = styled.ol`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const ListItem = styled.li``;

export const StyledArticle = styled.article`
  position: relative;
`;

export const Content = styled.div`
  padding-top: 115px;
  padding-bottom: 32px;
`;

export const StyledLink = styled(Link)`
  ${unstyledLinkStyle};
`;

export const Heading = styled.h2`
  ${headingDellaStyle};
  ${h2Style};
`;

export const ImageWrapper = styled.div`
  margin-top: 130px;
`;
