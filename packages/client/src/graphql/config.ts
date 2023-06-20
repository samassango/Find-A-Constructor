import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.VITE_API_BASE_ENDPOINT,
    cache: new InMemoryCache(),
  });