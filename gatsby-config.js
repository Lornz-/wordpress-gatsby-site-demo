/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Demo`,
    description: `An example to learn how to source data from WordPress with Gatsby.`,
    author: `@Lornz-`,
  },
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connect Gatsby
       * to WordPress.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/README.md
       *
       */
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL || `http://gatsby-wp-demo.local/wp/graphql`,
        html: {
          useGatsbyImage: true,
        },
      },
    },
    {
      /**
       * The plugin that allows us to connect Gatsby to the Swapcard API
       */
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'Swapcard',
        fieldName: 'swapcard',
        url: process.env.SWAPCARD_GRAPHQL_ENDPOINT,
        headers: {
          Authorization: process.env.SWAPCARD_API_ACCESS_TOKEN,
        },
      },
    },
    {
      /**
       * This plugin generates fileNodes in your graphQL schema
       * and add File type to it. You can now use gatsby-plugin-sharp and gatsby-transformer-sharp
       * in your GraphQL schema.
       * See https://www.gatsbyjs.com/plugins/gatsby-image-graphql-schema
       */
      resolve: 'gatsby-image-graphql-schema',
      options: {
        imageNames: ['Swapcard_Speaker.photoUrl'],
        schemaTypeName: 'Swapcard',
      },
    },
    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby WordPress Demo`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-graphql-loader`,
    {
      /**
       * Use this plugin to simplify creating a “hybrid” Gatsby app
       * with both statically rendered pages as well as “client-paths”.
       * These paths exist on the client only and will not be included at build time.
       */
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/preview/*`] },
    },
    {
      /**
       * A Gatsby plugin to handle cdn, base64 and self hosted webfonts
       * see https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/?=gatsby-plugin-webfonts
       */
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Della Respira',
              variants: ['400'],
              fontDisplay: 'swap',
              strategy: 'selfHosted', // 'base64' || 'cdn'
            },
            {
              family: 'Michroma',
              variants: ['400'],
              fontDisplay: 'swap',
              strategy: 'selfHosted', // 'base64' || 'cdn'
            },
            {
              family: 'Open Sans',
              variants: ['300', '300i', '400', '400i', '600', '700', '800'],
              fontDisplay: 'swap',
              strategy: 'selfHosted', // 'base64' || 'cdn'
            },
          ],
        },
      },
    },
    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
  ],
};
