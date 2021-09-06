import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import path from 'path';

console.log("dirname: ", __dirname);

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



// export default {
//   entities: [Post],
//   dbName: 'lireddit',
//   type: 'mysql',
//   debug: !__prod__,
// } as Parameters<typeof MikroORM.init>[0];