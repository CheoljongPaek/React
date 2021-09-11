import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
@Unique({ properties: ['username'] })
export class User {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updateAt = new Date();

  @Field()
  @Property({ length: 30 })
  username!: string;

  // @Field()
  @Property({ type: 'text' })
  password!: string;
}