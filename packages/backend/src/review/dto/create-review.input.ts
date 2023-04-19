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
  @IsString()
  @IsNotEmpty()
  @Length(0, 100)
  title: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @Length(0, 500)
  content: string;

  @Field(() => [Number], { nullable: true })
  @IsNumber({}, { each: true })
  photos?: number[];

  @Field(() => Number, { nullable: false })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  rating: number;

  @Field(() => Number, { nullable: false })
  @IsNumber()
  @IsNotEmpty()
  restaurantId?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  productId?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsNotEmpty()
  authorId: number;
}
