import { dedupExchange, fetchExchange } from '@urql/core';
import { cacheExchange } from '@urql/exchange-graphcache';
import { LogoutMutation, MeQuery, MeDocument, LoginMutation, RegisterMutation } from '../generated/graphql';
import { betterupdateQuery } from './betterupdateQuery';

export const createUrqlClient = (ssrExchange: any) => ({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include" as const
  },
  exchanges: [dedupExchange, cacheExchange({
    updates: {
      Mutation: {
        logout: (_result, args, cache, info) => {
          betterupdateQuery<LogoutMutation, MeQuery>(
            _result,
            cache,
            { query: MeDocument },
            () => ({ me: null })
          )
        },

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
        },

        register: (_result, args, cache, info) => {
          betterupdateQuery<RegisterMutation, MeQuery>(
            _result,
            cache,
            { query: MeDocument },
            (result, query) => {
              if (result.register.errors) {
                return query
              } else {
                return {
                  me: result.register.user
                }
              }
            }
          );
        }
      }
    }
  }), ssrExchange, fetchExchange]
})