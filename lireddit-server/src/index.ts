import "reflect-metadata";
import { COOKIE_NAME, __prod__ } from './constants';
import { createConnection } from 'typeorm'
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
import { User } from './entities/User';
import { Post } from './entities/Post';
import path from 'path';
import { Updoot } from './entities/Updoot';
import { createUserLoader } from './utils/createUserLoader';
import { createUpdootLoader } from './utils/createUpdootLoader';

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    database: 'lireddit2',
    username: 'postgres',
    password: 'Ajtnlaka55!',
    logging: true,
    synchronize: true,
    entities: [Post, User, Updoot],
    // migrations: [path.join(__dirname, "./migrations/*")],
  });

  // await conn.runMigrations();

  // await Post.delete({});

  const app = express();
  
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
      req,
      res,
      redis,
      userLoader: createUserLoader(),
      updootLoader: createUpdootLoader()
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