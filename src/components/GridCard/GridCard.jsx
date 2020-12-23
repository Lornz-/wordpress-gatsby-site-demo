/* eslint-disable react/no-danger */
// vendors
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// utils
import stripHtmlTag from '../../utils/strings/stripHtmlTags';

// styles
import {
  textStyle,
  Container,
  Heading,
  TextWrapper,
  Wrapper,
} from './GridCard.styles';

const GridCard = ({
  headingAs,
  title,
  name,
  alt,
  picture,
  bgColor,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Wrapper bgColor={title ? bgColor : undefined}>
        {title ? (
          <p
            dangerouslySetInnerHTML={{
              __html: title,
            }}
            css={textStyle}
          />
        ) : (
          <>
            <Img fluid={picture} alt={alt} loading='lazy' />

            <TextWrapper>
              <Heading
                as={headingAs}
                dangerouslySetInnerHTML={{
                  __html: stripHtmlTag(name),
                }}
              />
            </TextWrapper>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
GridCard.propTypes = {
  headingAs: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  picture: PropTypes.shape({}),
  bgColor: PropTypes.string,
};

GridCard.defaultProps = {
  headingAs: null,
  title: null,
  name: null,
  alt: null,
  picture: null,
  bgColor: null,
};

export default GridCard;
