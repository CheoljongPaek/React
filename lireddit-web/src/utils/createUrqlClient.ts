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

const cursorPagination = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const allFields = cache.inspectFields(info.parentKey)
    const fieldInfos = allFields.filter((afield) => afield.fieldName === info.fieldName);
    console.log("fieldInfos: ", fieldInfos);
    
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }
    const fieldKey = `${info.fieldName}(${stringifyVariables(fieldArgs)})`;
    const isItInTheCache = cache.resolve(
      cache.resolve(info.parentKey, fieldKey) as string,
      "posts"
    )
    
    let hasMore = true;
    info.partial = !isItInTheCache;
    const results: string[] = [];
    fieldInfos.forEach((fi) => {
      const key = cache.resolve(info.parentKey, fi.fieldKey) as string;      
      //Query, posts({"limit":10})
      //"Query", .posts(limit: 10) → "Posts:1"
      //key = Query.posts({"limit":10})
      const data = cache.resolve(key, "posts") as string[];
      const _hasMore = cache.resolve(key, 'hasMore');
      if (!_hasMore) {
        hasMore = _hasMore as boolean;
      }
      results.push(...data);
      
    })
    
    return {
      __typename: "PaginatedPosts",
      hasMore,
      posts: results
    }
  }
}

export const createUrqlClient = (ssrExchange: any) => ({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include" as const
  },
  exchanges: [
    dedupExchange, 
    cacheExchange({
      keys: {
        PaginatedPosts: () => null,
      },
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