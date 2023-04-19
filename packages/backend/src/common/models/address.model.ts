import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

@ObjectType()
export default class Address extends BaseModel {
  @Field(() => String, { nullable: false })
  street: string;

  @Field(() => String, { nullable: false })
  city: string;

  @Field(() => String, { nullable: false })
  state: string;

  @Field(() => String, { nullable: false })
  zip: string;

  @Field(() => String, { nullable: false })
  country: string;
}
