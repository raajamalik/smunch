import 'reflect-metadata';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import Address from '../../common/models/address.model';
import { Review } from 'src/review/model/review.model';

@ObjectType()
export class User extends BaseModel {
  @Field(() => String, { nullable: false })
  firstName: string;

  @Field(() => String, { nullable: false })
  lastName: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => [Address], { nullable: true })
  addresses: Address[];

  @Field(() => [Review], { nullable: true })
  reviews?: Review[];
}
