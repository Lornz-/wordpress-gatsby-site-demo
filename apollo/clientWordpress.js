import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';

const cache = new InMemoryCache();

/**
 * The Apollo Client which allows us to make a data request from the client
 * to Wordpress via the WP Gatsby plugin. This is mainly use to preview a post
 * before publishing it on WP
 *
 * Read more on Apollo client: https://www.apollographql.com/docs/react/get-started/
 */
const clientWordpress = new ApolloClient({
  cache,
  link: ApolloLink.from([
    setContext((req, prev) => {
      return {
        headers: {
          ...prev.headers,
          'X-WP-Nonce': req.variables.nonce ? req.variables.nonce : '',
        },
      };
    }),
    new HttpLink({
      uri:
        process.env.WPGRAPHQL_URL || `http://gatsby-wp-demo.local/wp/graphql`,
      credentials: 'include',
      fetch,
    }),
  ]),
});

export default clientWordpress;
