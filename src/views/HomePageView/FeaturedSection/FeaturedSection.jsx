/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

// utils
import stripHtmlTag from '../../../utils/strings/stripHtmlTags';

// components
import SideBarLayout from '../../../components/SideBarLayout';
import GridCard from '../../../components/GridCard';

// styles
import {
  subtitleStyle,
  GridContainer,
  SectionContainer,
  TextWrapper,
} from './FeaturedSection.styles';
import colors from '../../../styles/colors';
import { colorFullHeadingStyle } from '../../../styles/global';

const FeaturedSection = ({ featured }) => {
  const {
    featuredTitle,
    featuredSubtitle,
    featuredDescription,
    featuredThumbnails,
  } = featured;

  const thumbnails = featuredThumbnails.map((thumbnail) => ({
    title: thumbnail.title,
    name: thumbnail.name,
    id: thumbnail.picture?.id,
    alt: thumbnail.picture?.altText,
    picture: thumbnail.picture?.localFile?.childImageSharp.fluid,
    bgColor: thumbnail.bgColor,
  }));

  return (
    <SectionContainer id='featured'>
      <SideBarLayout spaced gutterWidth='20px' contentWidth='42%'>
        <div
          css={`
            padding-left: max(
              calc(50% - var(--max-container-width) / 2 - 10px),
              var(--container-gutter)
            );
            background-color: ${colors.darkSienna700};
          `}
        >
          <TextWrapper>
            <p
              dangerouslySetInnerHTML={{
                __html: featuredSubtitle,
              }}
              css={subtitleStyle}
            />

            <h2
              dangerouslySetInnerHTML={{
                __html: stripHtmlTag(featuredTitle),
              }}
              css={colorFullHeadingStyle}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: featuredDescription,
              }}
            />
          </TextWrapper>
        </div>

        <div>
          <GridContainer>
            {thumbnails.map((thumbnail) => (
              <GridCard
                key={thumbnail.id}
                title={thumbnail.title}
                name={thumbnail.name}
                alt={thumbnail.alt}
                picture={thumbnail.picture}
                bgColor={thumbnail.bgColor}
              />
            ))}
          </GridContainer>
        </div>
      </SideBarLayout>
    </SectionContainer>
  );
};

FeaturedSection.propTypes = {
  featured: PropTypes.shape({
    featuredTitle: PropTypes.string,
    featuredSubtitle: PropTypes.string,
    featuredDescription: PropTypes.string,
    featuredThumbnails: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default FeaturedSection;
