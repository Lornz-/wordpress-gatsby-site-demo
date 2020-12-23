/* eslint-disable react/no-danger */
// vendors
import React from 'react';
import PropTypes from 'prop-types';
import SideBarLayout from '../../../components/SideBarLayout';

// utils
import stripHtmlTag from '../../../utils/strings/stripHtmlTags';

// styles
import {
  SectionContainer,
  Wrapper,
  subtitleStyle,
} from './ExperienceSection.styles';
import { colorFullHeadingStyle } from '../../../styles/global';

const ExperienceSection = ({ experience }) => {
  const {
    experienceTitle,
    experienceSubtitle,
    experienceDescription,
    experienceMedia,
  } = experience;

  return (
    <SectionContainer id='experience'>
      <Wrapper>
        <SideBarLayout spaced>
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: stripHtmlTag(experienceTitle),
              }}
              css={subtitleStyle}
            />

            <h2
              dangerouslySetInnerHTML={{ __html: experienceSubtitle }}
              css={colorFullHeadingStyle}
            />
            <p dangerouslySetInnerHTML={{ __html: experienceDescription }} />
          </div>

          <div
            css={`
              width: 100%;
              height: 0;
              padding-bottom: 20%;
              position: relative;
            `}
          >
            <iframe
              title={`Jedi's training`}
              src={experienceMedia.mediaUrl}
              width='100%'
              height='100%'
              frameBorder='0'
              css={`
                position: absolute;
              `}
            />
          </div>
        </SideBarLayout>
      </Wrapper>
    </SectionContainer>
  );
};

ExperienceSection.propTypes = {
  experience: PropTypes.shape({
    experienceTitle: PropTypes.string.isRequired,
    experienceSubtitle: PropTypes.string.isRequired,
    experienceDescription: PropTypes.string.isRequired,
    experienceMedia: {
      mediaUrl: PropTypes.string,
    },
  }).isRequired,
};

export default ExperienceSection;
