import React from 'react'
import { Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import Routes from './routes'
import history from './services/history'

import GlobalStyle from './styles/global'

import apolloClient from './services/apollo'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </ApolloProvider>
  )
}

export default App
