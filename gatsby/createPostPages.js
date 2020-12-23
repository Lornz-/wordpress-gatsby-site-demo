const path = require(`path`);
const chunk = require(`lodash/chunk`);

// /**
//  * This function queries Gatsby's GraphQL server and asks for
//  * All WordPress blog posts. If there are any GraphQL error it throws an error
//  * Otherwise it will return the posts 🙌
//  *
//  * We're passing in the utilities we got from createPages.
//  * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
//  */
const getPosts = async ({ graphql, reporter }) => {
  const {
    data: {
      posts: { edges: posts },
    },
  } = await graphql(`
    {
      # Query all WordPress blog posts sorted by date
      posts: allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
            slug
            uri
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
            slug
          }

          next {
            id
            slug
            uri
          }
        }
      }
    }
  `);

  if (posts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      posts.errors
    );
    return;
  }

  // eslint-disable-next-line consistent-return
  return posts;
};

const createIndividualPost = async ({ posts, actions }) => {
  const { createPage } = actions;
  const template = path.resolve('src/templates/BlogPost/BlogPost.jsx');

  posts.map(async ({ previous, post, next }) => {
    createPage({
      // Use the WordPress uri as the Gatsby page path
      // This is a good idea so that internal links and menus work 👍
      path: `/blog/${post.slug}/`,
      // use the blog post template as the page component
      component: template,
      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        // we need to add the post id here
        // so our blog post template knows which blog post
        // the current page is (when you open it in a browser)
        id: post.id,
        // We also use the next and previous id's to query them and add links!
        previousPostId: previous ? previous.id : null,

        nextPostId: next ? next.id : null,
      },
    });
  });
};

const createBlogPostArchive = async ({ posts, graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(
    'src/templates/BlogPostArchive/BlogPostArchive.jsx'
  );

  const {
    data: {
      wp: {
        readingSettings: { postsPerPage },
      },
    },
  } = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `);

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage);
  const totalPages = postsChunkedIntoArchivePages.length;

  postsChunkedIntoArchivePages.map(async (_posts, index) => {
    const pageNumber = index + 1;
    // console.log('_POSTS', _posts);

    const getPagePath = (page) => {
      if (page > 0 && page <= totalPages) {
        // Since our homepage is our blog page
        // we want the first page to be "/" and any additional pages
        // to be numbered.
        // "/blog/2" for example
        return page === 1 ? `/blog` : `/blog/${page}`;
      }

      return null;
    };

    // createPage is an action passed to createPages
    // See https://www.gatsbyjs.com/docs/actions#createPage for more info
    createPage({
      path: getPagePath(pageNumber),
      // use the blog post archive template as the page component
      component: template,

      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        // the index of our loop is the offset of which posts we want to display
        // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
        // etc
        offset: index * postsPerPage,
        // We need to tell the template how many posts to display too
        postsPerPage,

        nextPagePath: getPagePath(pageNumber + 1),
        previousPagePath: getPagePath(pageNumber - 1),
      },
    });
  });
};

module.exports = async ({ graphql, actions, reporter }) => {
  const posts = await getPosts({ graphql, reporter });

  if (!posts.length) {
    return;
  }

  await createIndividualPost({ posts, actions });

  await createBlogPostArchive({ posts, graphql, actions });
};
