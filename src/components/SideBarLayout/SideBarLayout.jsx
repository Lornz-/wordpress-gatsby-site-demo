// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Wrapper, Container } from './SideBarLayout.styles';

/**
 * The Sidebar layout is named for the element that forms the diminutive sidebar:
 * the narrower of two adjacent elements.
 * @param {String} tag — Custom HTML tag we want to apply
 * @param {bool} spaced — The space (margin) between the sidebar and non-sidebar
 * @param {String} sideWidth — The width of the sidebar (empty means not set; defaults to the content width)
 * @param {String} contentWidth — The narrowest the content (main) element can be before wrapping. Should be a percentage.
 * @param {React.ReactNode} children — React Children elements we want to apply the layout. Should be exactly two child elements.
 * @param {...Object} rest — Spread the rest of React props
 */
const SideBarLayout = ({
  tag,
  spaced,
  sideWidth,
  gutterWidth,
  contentWidth,
  children,
  ...rest
}) => {
  const childrenCount = React.Children.count(children);

  if (childrenCount !== 2) {
    return new Error(
      'SideBarLayout component should have exactly two child elements of its own`'
    );
  }

  return (
    <Wrapper {...rest}>
      <Container
        as={tag}
        spaced={spaced}
        sideWidth={sideWidth}
        gutterWidth={gutterWidth}
        contentWidth={contentWidth}
      >
        {children}
      </Container>
    </Wrapper>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
SideBarLayout.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  spaced: PropTypes.bool,
  sideWidth: PropTypes.string,
  gutterWidth: PropTypes.string,
  contentWidth: PropTypes.string,
};
SideBarLayout.defaultProps = {
  tag: null,
  spaced: false,
  sideWidth: '480px',
  gutterWidth: '30px',
  contentWidth: '50%',
};

export default SideBarLayout;
