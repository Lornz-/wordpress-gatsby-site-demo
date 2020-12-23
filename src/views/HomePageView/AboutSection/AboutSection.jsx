// vendors
import React from 'react';
import { hideVisually } from 'polished';

// styles
import { Section, Container, Wrapper } from './AboutSection.styles';

const AboutSection = () => {
  return (
    <Section id='about'>
      <h2 css={hideVisually}>What is Jedi Summit</h2>

      <Container>
        <Wrapper>
          <p>
            He says he&apos;s found the main computer to power the tractor beam
            that&apos;s holding the ship here. He&apos;ll try to make the
            precise location appear on the monitor. The tractor beam is coupled
            to the main reactor in seven locations. A power loss at one of the
            terminals will allow the ship to leave. I don&apos;t think you boys
            can help. I must go alone. Whatever you say. I&apos;ve done more
            that I bargained for on this trip already. Be patient, Luke. Stay
            and watch over the droids. But he can...
          </p>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default AboutSection;
