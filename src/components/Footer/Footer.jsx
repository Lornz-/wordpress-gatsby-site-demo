// vendors
import React from 'react';
import { hideVisually } from 'polished';

// styles
import { Container, Wrapper, Copyright } from './Footer.styles';

const Footer = () => {
  return (
    <Container>
      <h2 css={hideVisually}>Footer menu and social</h2>

      <Wrapper>
        <Copyright>© Jedi Summit 2021</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
