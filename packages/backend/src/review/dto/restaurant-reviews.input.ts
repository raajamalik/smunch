import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RestaurantReviewInput {
  @Field(() => Number, { nullable: false })
  restaurantId: number;
}
