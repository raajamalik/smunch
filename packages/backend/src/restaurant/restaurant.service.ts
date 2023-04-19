import { Injectable } from '@nestjs/common';
import RestaurantDataAccessService from './restaurant.data-access.service';
import Restaurant from './model/restaurant.model';
import { SearchInput } from './dto/search.input';
import { SearchOutput } from './dto/search.output';
import { Review } from 'src/review/model/review.model';

@Injectable()
class RestaurantService {
  constructor(
    private readonly restaurantDataAccessService: RestaurantDataAccessService,
  ) {}

  async search(searchInput: SearchInput): Promise<SearchOutput[] | []> {
    if (searchInput.cuisine === -1) {
      delete searchInput.cuisine;
    }
    const restaurants = await this.restaurantDataAccessService.search(
      searchInput,
    );
    return this.createSearchOutput(restaurants);
  }

  async topPick(): Promise<SearchOutput[] | []> {
    const topRestaurants: Restaurant[] =
      await this.restaurantDataAccessService.topPick();
    return this.createSearchOutput(topRestaurants);
  }

  private createSearchOutput(restaurants: Restaurant[]): SearchOutput[] {
    const searchOutput: SearchOutput[] = [];
    for (const restaurant of restaurants) {
      const averageRating = this.getAvgRating(restaurant.reviews);
      const latestReview = this.getLatestReviews(restaurant.reviews);

      searchOutput.push({
        id: restaurant.id,
        name: restaurant.name,
        latestReview,
        averageRating,
        createdAt: restaurant.createdAt,
        updatedAt: restaurant.updatedAt,
      });
    }
    return searchOutput;
  }

  getAvgRating(reviews: Review[]): number {
    if (reviews.length === 0) {
      return 0;
    }
    const sum = reviews.reduce((acc, cur) => acc + cur.rating, 0);
    return sum / reviews.length;
  }

  getLatestReviews(reviews: Review[]): string {
    if (reviews.length === 0) {
      return '';
    }
    const latestReview = reviews.reduce((acc, cur) => {
      if (acc.createdAt > cur.createdAt) {
        return acc;
      } else {
        return cur;
      }
    }, reviews[0]);
    return latestReview.title;
  }
}

export default RestaurantService;
