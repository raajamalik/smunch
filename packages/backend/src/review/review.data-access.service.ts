import { Review as ReviewEntity } from '@prisma/client';
import { Review as ReviewModel } from './model/review.model';
import { ReviewRepository } from './review.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
class ReviewDataAccessService {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  mapEntityToModel(reviewEntities: ReviewEntity[]): ReviewModel[] {
    return reviewEntities.map((reviewEntity) => ({
      id: reviewEntity.id,
      title: reviewEntity.title,
      content: reviewEntity.content,
      photos: reviewEntity['photos'],
      rating: reviewEntity.rating,
      createdAt: reviewEntity.createdAt,
      updatedAt: reviewEntity.updatedAt,
      user: reviewEntity['user'],
      authorId: reviewEntity['author'],
      restaurantId: reviewEntity['restaurant'],
    }));
  }

  async userReviews(userId: number): Promise<ReviewModel[]> {
    const reviewEntity: ReviewEntity[] =
      await this.reviewRepository.userReviews({
        userId,
      });
    return this.mapEntityToModel(reviewEntity);
  }

  async createReview(data): Promise<ReviewModel> {
    const reviewEntity: ReviewEntity = await this.reviewRepository.createReview(
      data,
    );
    return this.mapEntityToModel([reviewEntity])[0];
  }
}

export default ReviewDataAccessService;
