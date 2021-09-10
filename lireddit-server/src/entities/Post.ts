import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Post {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field()
  @Property({ type: 'date', onUpdate: () => new Date() })
  updateAt = new Date();

  @Field()
  @Property({ type: 'text' })
  title!: string;
}