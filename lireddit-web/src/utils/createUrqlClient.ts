import { dedupExchange, fetchExchange } from '@urql/core';
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
    console.log('allFields: ', allFields);
    
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
    
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }

    const result = [] as string[];
    fieldInfos.forEach(fi => {
      const data = cache.resolve(entityKey, fi.fieldKey) as string[];
      console.log(data);
      result.push(...data);
    });
    return result

    // const visited = new Set();
    // let result: NullArray<string> = [];
    // let prevOffset: number | null = null;

    // for (let i = 0; i < size; i++) {
    //   const { fieldKey, arguments: args } = fieldInfos[i];
    //   if (args === null || !compareArgs(fieldArgs, args)) {
    //     continue;
    //   }

    //   const links = cache.resolve(entityKey, fieldKey) as string[];
    //   const currentOffset = args[cursorArgument];

    //   if (
    //     links === null ||
    //     links.length === 0 ||
    //     typeof currentOffset !== 'number'
    //   ) {
    //     continue;
    //   }

    //   const tempResult: NullArray<string> = [];

    //   for (let j = 0; j < links.length; j++) {
    //     const link = links[j];
    //     if (visited.has(link)) continue;
    //     tempResult.push(link);
    //     visited.add(link);
    //   }

    //   if (
    //     (!prevOffset || currentOffset > prevOffset) ===
    //     (mergeMode === 'after')
    //   ) {
    //     result = [...result, ...tempResult];
    //   } else {
    //     result = [...tempResult, ...result];
    //   }

    //   prevOffset = currentOffset;
    // }

    // const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs);
    // if (hasCurrentPage) {
    //   return result;
    // } else if (!(info as any).store.schema) {
    //   return undefined;
    // } else {
    //   info.partial = true;
    //   return result;
    // }
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