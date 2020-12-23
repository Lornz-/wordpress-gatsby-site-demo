// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import parse from 'html-react-parser';

// components
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import SideBarLayout from '../../components/SideBarLayout';

// styles
import {
  Container,
  Wrapper,
  Content,
  List,
  ListItem,
  StyledLink,
  StyledArticle,
  Heading,
  ImageWrapper,
} from './BlogPostArchive.styles';

/**
 * Template used to index each blog post
 * @param {Object} data — Data fetched from Wordpress at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createPostPages.js) and use that as variables GraphQL query.
 */
const BlogPostArchiveTemplate = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const {
    allWpPost: { nodes },
  } = data;

  // console.log(nodes);

  const posts = nodes.map((node) => ({
    authorName: node.author.node?.name,
    id: node.featuredImage?.node?.id,
    alt: node.featuredImage?.node?.altText,
    picture: node.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    ...node,
  }));

  // console.log(posts);

  if (!posts.length) {
    return (
      <Layout>
        <SEO title='All posts' />

        <Container>
          <Wrapper>
            <p>
              No blog posts found. Add posts to your WordPress site and
              they&apos;ll appear here!
            </p>
          </Wrapper>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title='All posts' />

      <Container>
        <List>
          {posts.map((post) => {
            const { title } = post;

            return (
              <ListItem key={post.uri}>
                <StyledArticle itemScope itemType='http://schema.org/Article'>
                  <div
                    css={`
                      position: absolute;
                      top: 70px;
                      left: 0;
                      right: 0;

                      display: flex;
                      flex-direction: row;
                      justify-content: space-between;

                      padding: 0.75rem 0;
                      border-top: 1px solid currentColor;

                      font-weight: var(--fontWeightBold);
                      font-size: 0.7rem;
                      line-height: 1.1;
                      letter-spacing: 0.04rem;
                      text-transform: uppercase;
                    `}
                  >
                    <small>{post.authorName}</small>
                    <small>{post.date}</small>
                  </div>

                  <Content>
                    <SideBarLayout spaced sideWidth='250px' contentWidth='30%'>
                      <div>
                        <header>
                          <Heading>
                            <StyledLink to={post.uri} itemProp='url'>
                              <span itemProp='headline'>{parse(title)}</span>
                            </StyledLink>
                          </Heading>
                        </header>

                        <section itemProp='description'>
                          {parse(post.excerpt)}
                        </section>
                      </div>

                      <div>
                        <ImageWrapper>
                          {post.picture && (
                            <Img fluid={post.picture} alt={post.alt} />
                          )}
                        </ImageWrapper>
                      </div>
                    </SideBarLayout>
                  </Content>
                </StyledArticle>
              </ListItem>
            );
          })}
        </List>

        {previousPagePath && (
          <>
            <Link to={previousPagePath}>Previous page</Link>
            <br />
          </>
        )}
        {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
      </Container>
    </Layout>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
BlogPostArchiveTemplate.propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      nodes: PropTypes.arrayOf({}),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }).isRequired,
};

export default BlogPostArchiveTemplate;

/**
 * Query to get a all blog posts sorted by date in descending order
 * @param {number} $offset — Index of our loop is the offset of which posts we want to display
 * @param {number} $postsPerPage — Number of posts we want to display per page
 * See @link gatsby/createPostPages.js
 */
export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            id
            altText
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
    }
  }
`;
