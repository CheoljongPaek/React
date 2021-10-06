import { MikroORM } from '@mikro-orm/core'
import { COOKIE_NAME, __prod__ } from './constants';
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
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis'
import { MyContext } from './types';
import cors from 'cors'
// import { User } from './entities/User';
// import { sendEmail } from './utils/sendEmail';

const main = async () => {
  // sendEmail('bob@bob.com', 'hello there');
  const orm = await MikroORM.init(microConfig);
  // await orm.em.nativeDelete(User, {})
  // const migrator = orm.getMigrator();
  // await migrator.createMigration();
  // await migrator.up();

  const app = express();

  // const generator = orm.getSchemaGenerator();
  // await generator.updateSchema();
  
  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }))

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
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
      res,
      redis
    }),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log('server started on localhost:4000');
  })
};

main().catch((err) => {
  console.error(err);
});