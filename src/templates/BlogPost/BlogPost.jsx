// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import parse from 'html-react-parser';

// components
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

// styles
import { Container } from './BlogPost.styles';
import { headingDellaStyle } from '../../styles/global';

/**
 * Template used to build each blog post page
 * @param {Object} data — Data fetched from Wordpress at build time
 * @param {Object} preview — Data fetched from Wordpress on client side
 */
const BlogPostTemplate = ({ data, preview }) => {
  /**
   * Determine if we're looking at a preview or live page.
   * In case of a preview, we get the latest revision of the post.
   */
  let post;
  let previous;
  let next;
  if (preview) {
    // eslint-disable-next-line prefer-destructuring
    post = preview.posts.nodes[0].revisions.nodes[0];
  } else {
    previous = data.previous;
    post = data.post;
    next = data.next;
  }

  // console.log(post);

  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || '',
  };

  const date = new Date(post.date);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formatDate = new Intl.DateTimeFormat('fr', options).format(date);

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />

      <Container>
        <article itemScope itemType='http://schema.org/Article'>
          <header>
            <h2 itemProp='headline' css={headingDellaStyle}>
              {parse(post.title)}
            </h2>

            <p>{formatDate}</p>

            {/* if we have a featured image for this post let's display it */}
            {featuredImage?.fluid && (
              <Image
                fluid={featuredImage.fluid}
                alt={featuredImage.alt}
                style={{ marginBottom: 50 }}
              />
            )}
          </header>

          {!!post.content && (
            <section itemProp='articleBody'>{parse(post.content)}</section>
          )}

          <hr />
        </article>

        <nav>
          <ul
            css={`
              display: flex;
              flex-rap: wrap;
              justify-content: space-between;
              list-style: none;
              padding: 0;
            `}
          >
            <li>
              {previous && (
                <Link to={`/blog/${previous.slug}`} rel='prev'>
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={`/blog/${next.slug}`} rel='next'>
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </Layout>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      id: PropTypes.string,
      excerpt: PropTypes.string,
      content: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      featuredImage: PropTypes.shape({
        node: PropTypes.shape({
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.shape({}),
            }),
          }),
        }),
      }),
    }).isRequired,
    previous: PropTypes.shape({
      uri: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
    next: PropTypes.shape({
      uri: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
  }).isRequired,
  preview: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          revisions: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
          }),
        })
      ),
    }),
  }).isRequired,
};

export default BlogPostTemplate;

/**
 * Query to get a blog post by ID
 * @param {string} $id
 * @param {string} $previousPostId
 * @param {string} $nextPostId
 */
export const postQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(quality: 99) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    # this gets us the previous post by slug (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
      slug
    }

    # this gets us the next post by slug (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
      slug
    }
  }
`;
