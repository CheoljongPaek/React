import { dedupExchange, fetchExchange, stringifyVariables } from '@urql/core';
import { cacheExchange, Resolver } from '@urql/exchange-graphcache';
import { LogoutMutation, MeQuery, MeDocument, LoginMutation, RegisterMutation } from '../generated/graphql';
import { betterupdateQuery } from './betterupdateQuery';
import { pipe, tap } from 'wonka';
import { Exchange } from 'urql';
import Router from 'next/router'

export const errorExchange: Exchange = ({ forward }) => ops$ => {
  return pipe(
    forward(ops$),
    tap(({ error }) => {
      if (error?.message.includes('not authenticated')) {
        Router.replace("/login");
      }
      }
    )
  )
};

export type MergeMode = 'before' | 'after';

export interface PaginationParams {
  cursorArgument?: string;
  limitArgument?: string;
  mergeMode?: MergeMode;
}

export const cursorPagination = (): Resolver => {

  //return resolver through 'urql/exchange-graphcache'
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info;
    // fieldName = posts, entityKey = Query
    
    const allFields = cache.inspectFields(entityKey);
    // allFields:  [
    //   {
    //     fieldKey: 'posts({"limit":10})',
    //     fieldName: 'posts',
    //     arguments: { limit: 10 }
    //   }
    // ]
    
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }

    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    const isItInTheCache = cache.resolve(entityKey, fieldKey);

    info.partial = !isItInTheCache;
    const results = [] as string[];
    fieldInfos.forEach(fi => {
      const data = cache.resolve(entityKey, fi.fieldKey) as string[];
      results.push(...data);
    });
    return results
  };
};

export const createUrqlClient = (ssrExchange: any) => ({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include" as const
  },
  exchanges: [
    dedupExchange, 
    cacheExchange({
      resolvers: {
        Query: {
          posts: cursorPagination(),
        },
      },
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
    }), 
    errorExchange,
    ssrExchange, 
    fetchExchange
  ]
})