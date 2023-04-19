import Restaurant from './model/restaurant.model';
import { Restaurant as RestaurantEntity } from '@prisma/client';
import RestaurantRepository from './restaurant.repository';
import { Injectable } from '@nestjs/common';
import { SearchInput } from './dto/search.input';

@Injectable()
class RestaurantDataAccessService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  private mapToModel(restaurantEntity: RestaurantEntity[]): Restaurant[] {
    return restaurantEntity.map((restaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
      addresses: restaurant['addresses'],
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
      photos: restaurant['photos'],
      cuisine: restaurant['cuisine'],
      products: restaurant['products'],
      reviews: restaurant['reviews'],
      createdAt: restaurant.createdAt,
      updatedAt: restaurant.updatedAt,
    }));
  }

  async topPick(): Promise<Restaurant[]> {
    const restaurantEntities = await this.restaurantRepository.restaurants({
      take: 3,
    });
    return this.mapToModel(restaurantEntities);
  }

  async search(searchInput: SearchInput): Promise<Restaurant[]> {
    const restaurantEntities = await this.restaurantRepository.search({
      searchInput,
    });
    return this.mapToModel(restaurantEntities);
  }
}

export default RestaurantDataAccessService;
