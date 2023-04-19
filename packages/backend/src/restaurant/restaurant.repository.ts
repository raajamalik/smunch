import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Restaurant, Prisma } from '@prisma/client';
import { SearchInput } from './dto/search.input';

@Injectable()
export default class RestaurantRepository {
  constructor(private prisma: PrismaService) {}

  async restaurant(
    restaurantWhereUniqueInput: Prisma.RestaurantWhereUniqueInput,
  ): Promise<Restaurant | null> {
    return this.prisma.restaurant.findUnique({
      where: restaurantWhereUniqueInput,
    });
  }

  async restaurants(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RestaurantWhereUniqueInput;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput;
  }): Promise<Restaurant[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.restaurant.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        products: true,
        cuisine: true,
        photos: true,
        reviews: true,
      },
    });
  }

  async search(params: {
    searchInput: SearchInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.RestaurantWhereUniqueInput;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput;
  }): Promise<Restaurant[] | []> {
    const restaurants = await this.prisma.restaurant.findMany({
      where: {
        AND: [
          {
            OR: [
              {
                name: {
                  contains: params.searchInput.name.toLowerCase(),
                  mode: 'insensitive',
                },
              },
              {
                products: {
                  some: {
                    name: {
                      contains: params.searchInput.name.toLowerCase(),
                      mode: 'insensitive',
                    },
                  },
                },
              },
            ],
          },
          {
            cuisine: {
              id: {
                equals: params.searchInput.cuisine,
              },
            },
          },
        ],
      },
      include: {
        products: true,
        cuisine: true,
        photos: true,
        reviews: true,
      },
    });
    return restaurants;
  }

  async createRestaurant(
    data: Prisma.RestaurantCreateInput,
  ): Promise<Restaurant> {
    return this.prisma.restaurant.create({
      data,
    });
  }

  async updateRestaurant(params: {
    where: Prisma.RestaurantWhereUniqueInput;
    data: Prisma.RestaurantUpdateInput;
  }): Promise<Restaurant> {
    const { where, data } = params;
    return this.prisma.restaurant.update({
      data,
      where,
    });
  }

  async deleteRestaurant(
    where: Prisma.RestaurantWhereUniqueInput,
  ): Promise<Restaurant> {
    return this.prisma.restaurant.delete({
      where,
    });
  }
}
