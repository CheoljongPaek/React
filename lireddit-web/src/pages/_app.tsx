import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql'
import { cacheExchange, Cache, QueryInput } from '@urql/exchange-graphcache';

import theme from '../theme'
import { LoginMutation, MeDocument, MeQuery, Query } from '../generated/graphql';

function betterupdateQuery<Result, Query>(
  result: any,
  cache: Cache,
  qi: QueryInput,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include"
  },
  exchanges: [dedupExchange, cacheExchange({
    updates: {
      Mutation: {
        login: (_result, args, cache, info) => {
          betterupdateQuery<LoginMutation, MeQuery>(
            _result,
            cache,
            { query: MeDocument },
            (result, query) => {
              if (result.login.errors) {
                return query
              } else {
                return {
                  me: result.login.user
                }
              }
            }
          );
        }
      }
    }
  }), fetchExchange]
});

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
