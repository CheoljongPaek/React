import { User } from '../entities/User';
import { MyContext } from '../types';
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import argon2 from 'argon2';
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from '../constants';
import { UsernamePasswordInput } from './UsernamePasswordInput';
import { validateRegister } from '../utils/validateRegister';
import { sendEmail } from '../utils/sendEmail';
import { v4 } from 'uuid';

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
  @Mutation(() => UserResponse)
  async changePassword( 
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx() ctx: MyContext 
  ): Promise<UserResponse> {
    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: 'newPassword',
            message: 'password must be greater than 2'
          },
        ]
      };
    }

    const key = FORGET_PASSWORD_PREFIX + token;
    const userId = await ctx.redis.get(key);
    console.log('userId: ', userId);
    
    if (!userId) {
      return {
        errors: [
          {
            field: 'token',
            message: 'token expired'
          },
        ]
      }
    }

    const userIdNum = parseInt(userId)
    const user = await User.findOne(userIdNum);

    if (!user) {
      return {
        errors: [
          {
            field: 'token',
            message: 'user no longer exists',
          },
        ],
      };
    }

    User.update(
      { id: userIdNum },
      {
        password: await argon2.hash(newPassword)
      }
    );

    await ctx.redis.del(key);

    // log in user after change password
    ctx.req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg('email') email: string,
    @Ctx() ctx: MyContext
  ) {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      //the email is not in the db
      return true;
    }

    const token = v4();

    await ctx.redis.set(
      FORGET_PASSWORD_PREFIX + token, 
      user.id, 
      'ex', 
      1000 * 60 * 60 * 24 * 3
    ); // 3days

    await sendEmail(
      email, 
      `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
    );
    return true;
  }
  

  @Query(() => User, {nullable: true})
  async me(
    @Ctx() ctx: MyContext
  ) {
    if (!ctx.req.session.userId) {
      return null
    }
    const user = await User.findOne(ctx.req.session.userId);
    return user
  }
  
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() ctx: MyContext
  ): Promise<UserResponse> {
    const errors = validateRegister(options);
    if (errors) {
      return { errors };
    }
    const hashedPassword = await argon2.hash(options.password);
    const user = ctx.em.create(User, {
      username: options.username,
      email: options.email,
      password: hashedPassword,
      createdAt: new Date(),
      updateAt: new Date(),
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
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string, 
    @Ctx() ctx: MyContext 
  ): Promise<UserResponse> {
    const user = await ctx.em.findOne(
      User,
      usernameOrEmail.includes('@')
      ? { email: usernameOrEmail }
      : { username: usernameOrEmail }
      );
    if (!user) {
      return {
        errors: [
          {
            field: 'usernameOrEmail',
            message: "that username doesn't exist",
          },
        ]
      }
    }
    const valid = await argon2.verify(user.password, password);
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

  @Mutation(() => Boolean)
  logout(
    @Ctx() ctx: MyContext
  ) {
    return new Promise(resolve => ctx.req.session.destroy(err => {
      ctx.res.clearCookie(COOKIE_NAME);
      if (err) {
        console.log(err);
        resolve(false)
        return
      }
      resolve(true)
    }))
  }
}