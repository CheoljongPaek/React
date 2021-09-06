# Full Stack

## Front

## Back

## Day 1 ## #node run setup

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

## Day 2,3 ### orm db setup

8. `"@mikro-orm/cli": "^4.5.9",
    "@mikro-orm/core": "^4.5.9",
    "@mikro-orm/migrations": "^4.5.9",
    "@mikro-orm/postgresql": "^4.5.9",
    "pg": "^8.7.1"`
is similar with sequelize.
`MikroORM.init({...})` returns Promise with my entities and migrations.
use the Promise object as orm.
9. `"mikro-orm": {
        "useTsNode": true,
        "configPaths": [
        "./src/mikro-orm.config.ts",
        "./dist/mikro-orm.config.js"
        ]
    }`
to set the order of conflig file load in package.json.
10. build *./src/mikro-orm.config.ts* so that module will be placed on a parameter of `MikroORM.init(..here..)`.
> ## migrations in database 
> 