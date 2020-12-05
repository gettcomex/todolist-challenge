import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3333/graphql',
  }),
});

export const Apollo: React.FC<any> = ({ children }) => {
  client
    .query({
      query: gql`
      {
        todos {
          title
          id
          finished
        }
      }
      `,
    })
    .then((result) => (console.log(result)));

  return (

    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>

  );
};
