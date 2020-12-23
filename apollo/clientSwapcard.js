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
 * The Apollo Client which allows us to make a data request
 * to the Swapcard Graphql API from the client.
 *
 * Read more on Apollo client: https://www.apollographql.com/docs/react/get-started/
 */
const clientSwapcard = new ApolloClient({
  cache,
  link: ApolloLink.from([
    setContext((req, prev) => {
      return {
        headers: {
          ...prev.headers,
          authorization: process.env.SWAPCARD_API_ACCESS_TOKEN,
        },
      };
    }),
    new HttpLink({
      uri: process.env.SWAPCARD_GRAPHQL_ENDPOINT,
      credentials: 'omit',
      fetch,
    }),
  ]),
});

export default clientSwapcard;
