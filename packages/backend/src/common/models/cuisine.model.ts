import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

@ObjectType()
export class Cuisine extends BaseModel {
  @Field(() => String, { nullable: false })
  name: string;
}
