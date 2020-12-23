/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import clientWordpress from './apollo/clientWordpress';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={clientWordpress}>{element}</ApolloProvider>
);
