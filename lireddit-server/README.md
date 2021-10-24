# Full Stack
> Typescript
## Back
1. node run setup
2. orm db setup: mysql, mikro-orm, redis
3. server setup: express, apollo, graphql
## Front
1. nextjs typescript

## Day 1 node run setup

1. *yarn* is used to block the possibility to install packages in duplicate which can be problematic if there are many files.
2. *types/node* is a type information for built-in node fuction.
3. *ts-node* to run typescript file by transpiling(**not compiling**) typescript in memory.
4. *npx tsconfig.json* to build typescript configuration file called tsconfig.json. I chose *node* for backend.
> *ts-node* is slow ... use below *5*
5. *tsc -w* to compile typescript to javascript file.
6. *node dist/index.js* to run the compiled file to other terminal.
>  `"watch": "tsc -w"` to compile ts and `"start": "node dist/index.js"` to run the compiled js file.
> `"start2": "ts-node src/index.ts"` to run *ts* slowly without compiling.
7. While developing, use **nodemon** to show every change.
> ## Setup
> terminal 1: `"watch": "tsc -w"` to detect every change and compile it.
> terminal 2: `"dev": "nodemon dist/index.js"` to show every change in compiled file.

## Day 2,3,4 orm db setup
### Class Models(Entity) -> (*ORM*) -> Migrations -> Database
### *ORM* library produces migrations files and applies them in db.
### First, build class models
### Second, Apply ORM to the models to migrate them.

8. ```javascript
    "@mikro-orm/cli": "^4.5.9",
    "@mikro-orm/core": "^4.5.9",
    "@mikro-orm/migrations": "^4.5.9",
    "@mikro-orm/postgresql": "^4.5.9",
    "pg": "^8.7.1"
   ```
is similar with sequelize.
**Manually, I made db in mysql db.**
`MikroORM.init({...})` returns Promise with my entities and migrations.
use the Promise object as orm.
9. ```javascript
  "mikro-orm": {
    "useTsNode": true,
    "configPaths": [
    "./src/mikro-orm.config.ts",
    "./dist/mikro-orm.config.js"
    ]
  }
   ```
to set the order of config file load in package.json.
10. build *./src/mikro-orm.config.ts* so that module will be placed on there as *here* of a parameter of `MikroORM.init(..here..)`.
11. TS: typing of other module of function is possible like this.
```javascript
export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  entities: [Post],
  dbName: 'lireddit',
  type: 'mysql',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
```
> create absolute path by using path.join and __dirname.

12. make a initial migration in database `npx mikro-orm migration:create --initial`.
> The migrations table is used to keep track of already executed migrations.
> Therefore, use `--initial` flag first, and then use `npx mikro-orm migration:create --run`. 
> Intead of the command, use the below code.
>```javascript
>const main = async () => {
>const orm = await MikroORM.init(microConfig);
>await orm.getMigrator().up; 
>```
> use `orm.getMigrator().up`.

13. I solved the problem(12 does not work) might be happend because mysql needs password. I used Mikro-ORM's SchemaGenerator to initialize table.
`const generator = orm.getSchemaGenerator();
 await generator.updateSchema();
`
> `updateSchema` creates a table or updates it based on *./entities/Post.ts*.
> https://stackoverflow.com/questions/66959888/i-want-to-insert-with-mikro-orm-but-it-dont-find-my-table-c-tablenotfoundexce/67220373#67220373

## Day 5,6 server setup
### use graphal and type-graphql instead of REST.
### use apollo-server instead of express.
14. *yarn add express apollo-server-express graphql type-graphql*
15. *yarn add -D @types/express*
> First, creates express application.
`const app = express();`
> Second, creates ApolloServer object.
need to pass graphql schema in the object, so use *buildSchema* function from type-graphql.
```javascript
schema: await buildSchema({
  resolvers: [HelloResolver],
  validate: false
});
```
> Third, combine ApollServer with express.
`apolloServer.applyMiddleware({ app });`
## Day 7 server + db setup for Post
### combine graphql resolvers with mikroORM.
16. create new resolver *post* returning array of entity *Post*.
17. I did not create type for the entity, so use type-graphql decorators to the entity.
18. add argument **context** to ApolloServer. The argument is useful for passing things that any resolver might need like authentication scope and *database* connections.
```javascript
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
      validate: false
    }),
    context: () => ({
      em: orm.em
    })
  });
```
19. I can use the context in *resolvers*.
```javascript
@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() ctx: MyContext): Promise<Post[]> {
    return ctx.em.find(Post, {});
  }
}
```

## Day 8,9 server + db setup for User(register, login)
### combine graphql resolvers with mikroORM.
20. create *User.ts* entity. 
21. add the new entity in *mikro-orm.config.ts* configuration file.
... 여기까지만해도 db 생성하네... migration은 왜 하는거지? 진도 더 나가보기.
... 마이그레이션 할 때마다 생성되니 그 전 버전으로 돌아갈 수 있는 백업같은?
22. call `"create:migration": "mikro-orm migration:create"` for migration.
> `orm.getMigrator().up;` will automatically run the lastest version of migration files.

23. create *user.ts* resolver: *register, login, ...*
```javascript
  @Mutation(() => User)
```
Assign a return type of the function.

```javascript
 @Field(() => [Error], {nullable: true})
```
to use nullable, fill the type in necessity. 

24. error handling
```javascript
class UserResponse {
  @Field(() => [FieldError], {nullable: true})
  errors?: FieldError[];
  @Field(() => User, {nullable: true})
  user?: User;
}
```

Q. 'password' property is not used. so remove it from field?
```javascript
  @Field()
  @Property({ type: 'text', unique: true })
  username!: string;

  // @Field()
  @Property({ type: 'text' })
  password!: string;
```

## Day 10~14 cookie/session for User(register, login)
### store a cookie to user's browser/ use session for authentication to keep track everyhing.
> `ctx.req.session.userId = user.id;`
> **(1) Store in redis**
> `{userId: 1}` -> send that to redis.
> sess:wAfewfWfe -> {userId: 1} as key -> data
> **(2) Cookie**
> express-session middleware will set a cookie on my browser with *signed* key(aljefklajeflkejf) with `secret: 'berich'`
> whenever user makes a request, the signed key is sent to server.
> in server, the signed key -> again unsigned(sess:wAfewfWfe).
> make a request to redis with the unsigned key, and get data {userId: 1}
25. *yarn add express-session*
> 1: it stores some data on the user.
> 2: we can choose where the data is stored through additional modules.
26. *yarn add redis connect-redis express-session*
> redis is NOSQL formed with key-value
> mongodb is also NOSQL, but is formed with document.
> https://brunch.co.kr/@skykamja24/575
> https://meetup.toast.com/posts/224
> usually use for caching.
> use *ubuntu* and type *sudo service redis-server stop/start/restart*
type: *yarn add -D @types/redis @types/express-session @types/connect-redis*
27. place session middleware before apolloServer because I will use session middleware inside apolloServer.
28. After setting cookie session, build context like below one.
```javascript
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }): MyContext => ({
      em: orm.em,
      req,
      res
    })
  });
```
29. auto-login after register.
after register, add `ctx.req.session.userId = user.id;`
## Day 15 front start!
### nextjs: the file *name* in pages folder is automatically used for route.
### chakra-ui: https://chakra-ui.com/docs/getting-started
*yarn create next-app --example with-chakra-ui with-chakra-ui-app*
*config typescriptreact.json* snippets.
### register page

### connect front - back
30. *yarn add urql graphql*
*urql* is for graphql_client, sending graphql request to our API.
```javascript
// The *client* manages all of our graphql requests and results.
const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include"
  }
});
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      ...
    </Provider>
  )
}

export default MyApp
```
To make use of *client* in React, we will have to provide it via the context api. In my case, it is provided with the help of the *Provider* export.
Now every component and element inside and under the *Provider* can use GraphQL queries that will be sent to our API.

31. To avoid CORS Error, add cors middleware in server file.
```javascript
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

apolloServer.applyMiddleware({
  app,
  cors: false,
});
```

32. *yarn add -D @graphql-codegen/cli*: generate hooks for types of graphql schema.
*yarn graphql-codegen init*: auto-setup
33. check codegen.yml configuration file. yarn add `typescript-urql` revise a plugin to `typescript-urql`.
34. use the generated **all of the types of api + types generated from *.graphql file**.
35. login page according to 32~34.
36. In '/' router, display who the current user is.
```javascript In navigation component
import React from 'react'
import { Link } from '@chakra-ui/layout';
import NextLink from "next/link";

const Navbar: React.FC<NavBarProps> = ({}) => {
  return (
  ...
    <NextLink href="/login">
      <Link mr={2}>login</Link>
    </NextLink>
  ...
  );
}
```
Use NextLink function in next. Wrap the fuction to Link component.

37. Problem: caused by urql is caching the *me* request. Therefore, after logining, it did not make a network request. It just took the data from caching.
- Login: Should update cache and set our user's login.
- Register: Should update cache when a user registers.
> From server-side, session ID is stored in the client as a cookie,
> session Data is stored in the db I set. 
To solve it, use *exchnage* in urql. it sends a request to my server and update the new request if the request differs from the existing one.
*yarn add @urql/exchange-graphcache*
By using the existing `updateQuery()` fuction in exchange-graphcahce,
made a new fuction with types.
```javascript
function betterupdateQuery<Result, Query>(
  result: any,
  cache: Cache,
  qi: QueryInput,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}
```

38. Integrate the common fragment in graphql files.
`user { id username }` to
`user { ...RegularUser }`
```graphql
fragment RegularUser on User {
  id
  username
}
```

39. Add a mutation to a server, test it through apollo-server, and generate its codes in client.

To destroy session and clear cookie in client, in server:
```javascript
return new Promise(resolve => ctx.req.session.destroy(err => {
  ctx.res.clearCookie(COOKIE_NAME);
  ...
}))
```

However, when I click a logout button, the cookie is successfully removed, but the page does not reload. The expected page is shown after refresh.
Therefore, I used updateQuery(#37) again.

40. refactor urql client for optional ssd with urql.
> import { withUrqlClient } from 'next-urql';
In main page, I want to show my posts with SEO, so I chose ssr.

41. make a util fucntion to check *whether the script is being run in a web-page insed a web-browser or not(server)*
`export const isServer = () => typeof window === 'undefined';`
The reason why I did #41: NavBar component is on index ssr page, so everytime the current user query function is requested on next-js server. 

42. nodemailer in server for users forgotten password.
43. Add email column to field on User table.
> edit both backend & frontend
44. `yarn add uuid ioredis` `yarn add -D @types/uuid @types/ioredis` `yarn remove redis`
add redis in context to use a token generated by uuid.
The expiration date of password reset email is 3 days.

45. Next js serves a form to deal with a complex url.
> http://localhost:3000/change-password/${token}
In frontend, make files `pages/change-password/[token].tsx`
In the `[token].tsx`, I can use 'token' by getInitialProps function.

## Modeling Entity Relationship with typeorm
> Use Typeorm instead of mikro-orm
46. Post-User relationship setting.
**Find function** 
> Basically, `Post.findOne({ where: { email } })`
> If primary key, `Post.findOne(id)` is possible option.
**Create function**
> `Post.create({ title }).save();` need to be saved.

47. QueryBuilder and Entity sysytem are compatible.
`await User.create({...}).save()` is the same as
```javascript
await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: options.username,
          email: options.email,
          password: hashedPassword
        })
        .returning('*')
        .execute();
```

## Type-orm middleware in server
48. isAuth.ts/middleware for authentication.
> use decorator on mutation or query
> `@UseMiddleware(isAuth)`
Handle the authentic error in frontend too.
49. error control
In the case of 'client - server => error', handle all of the errors in createUrqlClient.ts file.
## Router Management
50. **useRouter** in next/router is used for replace/.../push.
How to contorl below query params in login page.
`router.replace("/login?next=" + router.pathname);`
`const router = useRouter()` is global.
In login page,
```javascript
  if (typeof router.query.next === "string") {
    router.push(router.query.next);
  } else {
    // worked        
    router.push("/");
  }
```
## Dummy Data
51. `https://mockaroo.com/` servers dummy data builders.
52. use typeorm migration and build the data in db.
>`npx typeorm migration:create -n FakePosts`
## Pagination  
```javascript
cacheExchange({
  resolvers: {
    Query: {
      posts: cursorPagination(),
    },
  },
})
```  
The exchange runs whenever the query runs.  
We can alter how the query looks.  

`const key = cache.resolve(info.parentKey, fi.fieldKey) as string;`  
info.parentKey is **"Query"** and fi.fieldKey is **"posts({"limit":10})"**.  
> "Query", .posts(limit: 10) → "Post:1"
> key = Query.posts({"limit":10})
## GraphQL Fetching Relationships  
53. Many-one and one-Many for Many-Many relationships between user and post.  
Make a new entity called Updoot. It is a join table with user and post.

54. I want to show a user's email to only the user.  
For field resolve of User entity,  
```javascript
@Resolver(User)
export class UserResolver {

  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() ctx: MyContext) {
    if (ctx.req.session.userId === user.id) {
      return user.email
    }
    // current user cannot see others email.
    return "";
  }
  //queries and mutations
}
```  
55. On the client, update! posts in client without refresh through urql updates. 
> Belows causes all queries using these listing fields to be **refetched**.
> `cache.invalidate(key, field.fieldKey)`
> `cache.invalidate(key, field.fieldName, field.arguments)`  
56. For vote-system, we need to update cache after voting.  
*readFragment* and *writeFragment* method allows data in the cache to be updated.  
