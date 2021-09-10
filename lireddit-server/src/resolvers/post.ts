import { Post } from 'src/entities/Post';
import { Query, Resolver } from 'type-graphql';

//return array of post

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts() {
    return 'post'
  }
}