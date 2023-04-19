import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

@ObjectType()
export class Photo extends BaseModel {
  @Field(() => String, { nullable: false })
  url: string;
}
