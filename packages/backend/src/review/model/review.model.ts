import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';

@ObjectType()
export class Review extends BaseModel {
  constructor() {
    super();
  }
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  content: string;

  @Field(() => Number, { nullable: false })
  rating: number;

  @Field(() => Number, { nullable: true })
  restaurantId: number | null;

  @Field(() => Number, { nullable: true })
  authorId: number | null;
}
