import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ReviewResolver } from './review.resolver';
import ReviewDataAccessService from './review.data-access.service';
import ReviewService from './review.service';
import { ReviewRepository } from './review.repository';

@Module({
  imports: [DbModule],
  providers: [
    ReviewResolver,
    ReviewService,
    ReviewDataAccessService,
    ReviewRepository,
  ],
})
export class ReviewModule {}
