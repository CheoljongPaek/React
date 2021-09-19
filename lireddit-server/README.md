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
> The migrations table is usded to keep track of already executed migrations.
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
*yarn add ural graphql*
