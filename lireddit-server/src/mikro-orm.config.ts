import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  password: 'Ajtnlaka55!',
  entities: [Post],
  dbName: 'lireddit',
  type: 'mysql',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];