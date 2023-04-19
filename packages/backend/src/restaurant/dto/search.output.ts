import { Field, ObjectType, Float } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';

@ObjectType()
export class SearchOutput extends BaseModel {
  @Field(() => String, { nullable: true })
  name?: string = '';

  @Field(() => Float, { nullable: true })
  averageRating?: number;

  @Field(() => String, { nullable: true })
  latestReview?: string;
}
