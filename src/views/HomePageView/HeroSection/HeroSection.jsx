// vendors
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// components
import Hero from '../../../components/Hero';

// styles
import {
  SupHeading,
  Heading,
  EventDatesWrapper,
  Icon,
  Dates,
} from './HeroSection.styles';

const query = graphql`
  query {
    # Get and process local cover images (i.e. src/images) with gatsby-image
    heroPictureDesktop: file(name: { eq: "img-header-home-desktop" }) {
      ...HeroPictureDesktopData
    }

    heroPictureMobile: file(name: { eq: "img-header-home-mobile" }) {
      ...HeroPictureMobileData
    }
  }
`;

const HeroSection = () => {
  const data = useStaticQuery(query);

  const {
    heroPictureDesktop: {
      childImageSharp: { fluid: heroPictureDesktop },
    },
    heroPictureMobile: {
      childImageSharp: { fluid: heroPictureMobile },
    },
  } = data;

  return (
    <Hero pictureMobile={heroPictureMobile} pictureDesktop={heroPictureDesktop}>
      <SupHeading>Hello there!</SupHeading>

      <Heading>Welcome to the most anticipated event of the galaxy</Heading>

      <EventDatesWrapper>
        <Icon />

        <Dates>June 21-22-23 2021</Dates>
      </EventDatesWrapper>
    </Hero>
  );
};

export default HeroSection;
