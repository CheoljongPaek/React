import { User } from '../entities/User';
import { MyContext } from 'src/types';
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import argon2 from 'argon2';

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string
  @Field()
  password: string
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], {nullable: true})
  errors?: FieldError[];
  @Field(() => User, {nullable: true})
  user?: User;
}
 
@Resolver()
export class UserResolver {
  @Query(() => User, {nullable: true})
  async me(
    @Ctx() ctx: MyContext
  ) {
    console.log("session: ", ctx.req.session);
    
    if (!ctx.req.session.userId) {
      return null
    }
    const user = await ctx.em.findOne(User, { id: ctx.req.session.userId });
    return user
  }
  
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() ctx: MyContext
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [{
          field: 'username',
          message: 'username must be greater than 2'
        }]
      }
    }

    if (options.password.length <= 2) {
      return {
        errors: [{
          field: 'password',
          message: 'password must be greater than 2'
        }]
      }
    }
    const hashedPassword = await argon2.hash(options.password);
    const user = ctx.em.create(User, {
      username: options.username,
      password: hashedPassword
    });
    try {
      await ctx.em.persistAndFlush(user);
    } catch(err) {
      if ((err as Error).name === 'UniqueConstraintViolationException') {
        return {
          errors: [
            {
              field: 'username',
              message: 'username already taken'
            },
          ]
        }
      }
    }

    // store user id session
    // this will set a cookie on the user
    // keep them logged in
    ctx.req.session.userId = user.id;

    return {
      user
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() ctx: MyContext 
  ): Promise<UserResponse> {
    const user = await ctx.em.findOne(User, {username: options.username});
    if (!user) {
      return {
        errors: [
          {
            field: 'username',
            message: "that username doesn't exist",
          },
        ]
      }
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: 'password',
            message: 'incorrect password'
          },
        ]
      }
    }

    ctx.req.session.userId = user.id;

    return {
      user
    };
  }
}