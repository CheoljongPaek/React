import { Post } from '../entities/Post';
import { Arg, Ctx, Field, FieldResolver, Info, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, UseMiddleware } from 'type-graphql';
import { MyContext } from '../types';
import { isAuth } from '../middleware/isAuth';
import { getConnection } from 'typeorm';
import { Updoot } from '../entities/Updoot';
import { User } from '../entities/User';

@InputType()
class PostInput {
  @Field()
  title: string
  @Field()
  text: string
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[]
  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {

  @FieldResolver(() => String)
  textSnippet(
    @Root() post: Post
  ) {
    return post.text.slice(0, 50);
  }

  @FieldResolver(() => User)
  creator(
    @Root() post: Post,
    @Ctx() ctx: MyContext
  ) {
    // return User.findOne(post.creatorId)
    
    return ctx.userLoader.load(post.creatorId)
  }

  @FieldResolver(() => Int, { nullable: true })
  async voteStatus(
    @Root() post: Post,
    @Ctx() ctx: MyContext
  ) { 
    //Updoot { value: 1, userId: 6, postId: 295 }
    if (!ctx.req.session.userId) {
      return null
    }
    const updoot = await ctx.updootLoader.load({
      postId: post.id,
      userId: ctx.req.session.userId
    });
    return updoot ? updoot.value : null;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg('postId', () => Int) postId: number,
    @Arg('value', () => Int) value: number,
    @Ctx() ctx: MyContext
  ) {
    const isUpdoot = value !== -1;
    const realValue = isUpdoot ? 1 : -1;
    const { userId } = ctx.req.session
    const updoot = await Updoot.findOne({where: {postId, userId}});
    // { value: -1, userId: 6, postId: 326 }

    if (!updoot) {
      //has never voted before.
      await getConnection().transaction(async (tm) => {
        await tm.query(`
          insert into updoot ("userId", "postId", value)
          values ($1, $2, $3)
        `, [userId, postId, realValue]);
        await tm.query(`
          update post
          set points = points + $1
          where id = $2
        `, [realValue, postId]);
      });
    }

    if (updoot && updoot.value === realValue) {
      return true;
    }
    
    // voted before, but change mind
    if (updoot && updoot.value !== realValue) {
      await getConnection().transaction(async (tm) => {
        await tm.query(`
          update updoot
          set value = $1
          where "postId" = $2 and "userId" = $3 
        `, [realValue, postId, userId]);
        await tm.query(`
          update post
          set points = points + $1
          where id = $2
        `, [2*realValue, postId]);
      })
    };
    return true;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    
    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }
    const posts = await getConnection().query(`
      select p.*
      from post p
      ${cursor ? `where p."createdAt" < $2` : ""}
      order by p."createdAt" DESC
      limit $1
    `, replacements);

    return { 
      posts: posts.slice(0, realLimit), 
      hasMore: posts.length === realLimitPlusOne,
    };
  }

  @Query(() => Post, {nullable: true})
  post(
      @Arg('id', () => Int) id: number,
    ): Promise<Post | undefined> {
      return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg('input') input: PostInput,
    @Ctx() ctx: MyContext 
  ): Promise<Post> {
    console.log('ctx.req.session.userId of create post: ', ctx.req.session.userId);
    return Post.create({
      ...input,
      creatorId: ctx.req.session.userId,
    }).save();
  }

  @Mutation(() => Post, {nullable: true})
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg('id', () => Int) id: number,
    @Arg('title', () => String, { nullable: true }) title: string,
    @Arg('text', () => String) text: string,
    @Ctx() ctx: MyContext
  ): Promise<Post | null> {
    const result = await getConnection()
    .createQueryBuilder()
    .update(Post)
    .set({ title, text })
    .where('id = :id and "creatorId" = :creatorId', { 
      id, 
      creatorId: ctx.req.session.userId 
    })
    .returning("*")
    .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg('id', () => Int) id: number,
    @Ctx() ctx: MyContext
  ): Promise<Boolean> {
    // const post = await Post.findOne(id);
    // if (!post) {
    //   return false
    // };
    // if (post.creatorId !== ctx.req.session.userId) {
    //   throw new Error('not authorized');
    // };

    // await Updoot.delete({
    //   postId: id
    // });
    await Post.delete({
      id,
      creatorId: ctx.req.session.userId
    });
    return true;
  }
}