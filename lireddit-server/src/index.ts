import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants';
// import { Post } from './entities/Post';
import microConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/user';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis'
import { MyContext } from './types';

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  // const migrator = orm.getMigrator();
  // await migrator.createMigration();
  // await migrator.up();

  const app = express();

  // const generator = orm.getSchemaGenerator();
  // await generator.updateSchema();
  
  let RedisStore = connectRedis(session)
  let redisClient = redis.createClient()

  app.use(
    session({
      name: 'qidd',
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true, // js file in front-end cannot access to the cookie.
        secure: __prod__, // cookie only works in https
        sameSite: 'lax', //csrf
      },
      saveUninitialized: false,
      secret: 'berich',
      resave: false,
    })
  )
  
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }): MyContext => ({
      em: orm.em,
      req,
      res
    }),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server started on localhost:4000');
  })
};

main().catch((err) => {
  console.error(err);
});