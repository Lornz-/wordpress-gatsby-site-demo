// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// utils
import { greaterThanCondition } from '../../utils/mediaQuery';

// styles
import {
  StyledHeader,
  ImageWrapper,
  StyledImage,
  TextWrapper,
} from './Hero.styles';

const Hero = ({ children, pictureMobile, pictureDesktop }) => {
  /**
   * Using two different set of images depending on viewport size
   * with custom sizes for performance optimization.
   * Useful for art direction.
   *
   * Learn more on gatsby-image 👉 https://www.gatsbyjs.com/plugins/gatsby-image/
   */
  const sources = [
    {
      ...pictureDesktop,
      media: greaterThanCondition(768),
      sizes: `${greaterThanCondition(1025)} 2000px, ${greaterThanCondition(
        768
      )} 768px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      q`,
    },
    {
      ...pictureMobile,
      sizes: '100vw',
    },
  ];

  return (
    <StyledHeader>
      <ImageWrapper>
        <StyledImage fluid={sources} loading='eager' />
      </ImageWrapper>

      <TextWrapper>{children}</TextWrapper>
    </StyledHeader>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
Hero.propTypes = {
  children: PropTypes.node.isRequired,
  pictureDesktop: PropTypes.shape({}).isRequired,
  pictureMobile: PropTypes.shape({}).isRequired,
};

export default Hero;

export const query = graphql`
  fragment HeroPictureDesktopData on File {
    childImageSharp {
      fluid(
        maxWidth: 2000
        maxHeight: 640
        quality: 100
        duotone: { highlight: "#ffffff", shadow: "#f0a060" }
      ) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }

  fragment HeroPictureMobileData on File {
    childImageSharp {
      fluid(
        maxWidth: 768
        maxHeight: 890
        quality: 100
        duotone: { highlight: "#ffffff", shadow: "#f0a060" }
      ) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;
