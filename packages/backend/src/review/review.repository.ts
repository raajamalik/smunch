import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Review, Prisma } from '@prisma/client';

@Injectable()
export class ReviewRepository {
  constructor(private prisma: PrismaService) {}

  async review(
    reviewWhereUniqueInput: Prisma.ReviewWhereUniqueInput,
  ): Promise<Review | null> {
    return this.prisma.review.findUnique({
      where: reviewWhereUniqueInput,
    });
  }

  async reviews(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ReviewWhereUniqueInput;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput;
  }): Promise<Review[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.review.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async userReviews(params: {
    userId: number;
    skip?: number;
    take?: number;
    cursor?: Prisma.ReviewWhereUniqueInput;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput;
  }): Promise<Review[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.review.findMany({
      where: {
        authorId: params.userId,
      },
    });
  }

  async createReview(data: Prisma.ReviewCreateInput): Promise<Review> {
    return this.prisma.review.create({
      data,
    });
  }

  async updateReview(params: {
    where: Prisma.ReviewWhereUniqueInput;
    data: Prisma.ReviewUpdateInput;
  }): Promise<Review> {
    const { where, data } = params;
    return this.prisma.review.update({
      data,
      where,
    });
  }

  async deleteReview(where: Prisma.ReviewWhereUniqueInput): Promise<Review> {
    return this.prisma.review.delete({
      where,
    });
  }
}
