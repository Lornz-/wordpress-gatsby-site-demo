import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import WithLocation from '../components/WithLocation';

import BlogPostTemplate from '../templates/BlogPost';
import queryPreviewPost from '../../queries/wordpress/get-preview-post.gql';

/**
 * Preview Page — This is where all requests from client side are made to Wordpress (WP)
 * especially to preview a post type before publishing it in WP
 * @param {Object} search — Return the querystring part of a URL made by WP
 * @param {...Object} rest — Spread the rest of React props
 */
const Preview = ({ search, ...rest }) => {
  const { type, post, status, nonce } = search;

  // Id needs to be an int for preview query.
  const id = parseInt(post, 10);

  const getQueryFromType = () => {
    switch (type) {
      case 'post':
        return queryPreviewPost;
      default:
        return null;
    }
  };

  const { loading, error, data } = useQuery(getQueryFromType(), {
    skip: Object.keys(search).length === 0,
    variables: { id, status: status?.toUpperCase(), nonce },
  });

  if (loading) return <p>Loading preview...</p>;
  if (error) return <p>Error: ${error.message}</p>;

  const renderPreview = () => {
    switch (type) {
      case 'post':
        return <BlogPostTemplate preview={data} {...rest} />;
      default:
        return undefined;
    }
  };

  return <>{renderPreview()}</>;
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
Preview.propTypes = {
  search: PropTypes.shape({
    type: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    nonce: PropTypes.string.isRequired,
  }).isRequired,
};

export default WithLocation(Preview);
