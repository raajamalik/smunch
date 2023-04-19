import { Injectable } from '@nestjs/common';
import ReviewDataAccessService from './review.data-access.service';
import { Review } from './model/review.model';
import { CreateReviewInput } from './dto/create-review.input';

@Injectable()
class ReviewService {
  constructor(
    private readonly reviewDataAccessService: ReviewDataAccessService,
  ) {}

  private mapInputToModel(input: CreateReviewInput): Review {
    return {
      id: input.id,
      title: input.title,
      content: input.content,
      rating: input.rating,
      createdAt: input.createdAt,
      updatedAt: input.updatedAt,
      restaurantId: input.restaurantId,
      authorId: input.authorId,
    };
  }

  async userReview(userId: number): Promise<Review[]> {
    return await this.reviewDataAccessService.userReviews(userId);
  }

  async createReview(reviewInput: CreateReviewInput): Promise<Review> {
    const data = this.mapInputToModel(reviewInput);
    return await this.reviewDataAccessService.createReview(data);
  }
}

export default ReviewService;
