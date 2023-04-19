import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserReviewInput {
  @Field(() => Number, { nullable: false })
  userId: number;
}
