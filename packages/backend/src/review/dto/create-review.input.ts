import { Field, InputType } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Max,
  Min,
  Length,
} from 'class-validator';

@InputType()
export class CreateReviewInput extends BaseModel {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  content: string;

  @Field(() => [Number], { nullable: true })
  photos?: number[];

  @Field(() => Number, { nullable: false })
  rating: number;

  @Field(() => Number, { nullable: false })
  restaurantId?: number;

  @Field(() => Number, { nullable: true })
  productId?: number;

  @Field(() => Number, { nullable: true })
  authorId: number;
}
