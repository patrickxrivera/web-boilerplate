/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../utils/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  // const dummyWallet = 'alex.eth'
  // const votesRemaining = 3
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
