// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// components
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';

// views
import HeroSection from '../views/HomePageView/HeroSection';
import AboutSection from '../views/HomePageView/AboutSection';
import ExperienceSection from '../views/HomePageView/ExperienceSection';
import FeaturedSection from '../views/HomePageView/FeaturedSection';

/**
 * This is the Home page of the website
 * @param {Object} data - Data fetched from Wordpress at build time
 * @param {Object} location - Get the current page address (URL)
 */
const HomePage = ({ data, location }) => {
  const {
    wpPage: {
      acfHomeLandingPage: { experience, featured },
    },
  } = data;

  return (
    <Layout location={location}>
      <SEO title='Welcome to the most anticipated event of the galaxy' />

      <HeroSection />

      <AboutSection />

      <ExperienceSection experience={experience} />

      <FeaturedSection featured={featured} />
    </Layout>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    wpPage: PropTypes.shape({
      acfHomeLandingPage: PropTypes.shape({
        experience: PropTypes.shape({}),
        featured: PropTypes.shape({}),
      }),
    }),
  }).isRequired,
};

export default HomePage;

export const query = graphql`
  query homePageQuery {
    # Get the Home Landing page data from Wordpress via the Graphql API schema
    # offered by gatsby-source-wordpress-experimental
    wpPage(slug: { eq: "home" }) {
      acfHomeLandingPage {
        experience {
          experienceDescription
          experienceSubtitle
          experienceTitle
          experienceMedia {
            mediaUrl
          }
        }
        featured {
          featuredTitle
          featuredSubtitle
          featuredDescription
          featuredThumbnails {
            title: thumbnailTitle
            isTitleOnly: thumbnailTitleOnly
            bgColor: thumbnailBackgroundColor
            name: thumbnailMasterName
            picture: thumbnailMasterPicture {
              id
              altText
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 473
                    maxHeight: 406
                    quality: 99
                    # grayscale: true
                    duotone: { highlight: "#ffffff", shadow: "#270f0b" }
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
