import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from 'apollo-link-http'

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client
