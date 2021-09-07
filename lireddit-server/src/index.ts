import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import microConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  //automatically generate migration. do not have to 
  //`npx mikro-orm migration:create --run`
  await orm.getMigrator().up;

  // const generator = orm.getSchemaGenerator();
  // await generator.updateSchema();

  // const post = orm.em.create(Post, {title: 'my first post'})
  // await orm.em.persistAndFlush(post);
  // const posts = await orm.em.find(Post, {});
  console.log(Post);
  
};

main().catch(err => {
  console.error(err);
});