import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Review } from './model/review.model';
import ReviewService from './review.service';
import { UserReviewInput } from './dto/user-reviews.input';
import { CreateReviewInput } from './dto/create-review.input';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => [Review])
  async userReviews(@Args('userReviewInput') userReviewInput: UserReviewInput) {
    return this.reviewService.userReview(userReviewInput.userId);
  }

  @Mutation(() => Review)
  async createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
  ) {
    return this.reviewService.createReview(createReviewInput);
  }
}
