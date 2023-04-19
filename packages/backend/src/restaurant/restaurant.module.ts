import { Module } from '@nestjs/common';
import RestaurantResolver from './restaurant.resolver';
import { DbModule } from 'src/db/db.module';
import RestaurantService from './restaurant.service';
import RestaurantDataAccessService from './restaurant.data-access.service';
import RestaurantRepository from './restaurant.repository';

@Module({
  imports: [DbModule],
  providers: [
    RestaurantResolver,
    RestaurantService,
    RestaurantDataAccessService,
    RestaurantRepository,
  ],
})
export class Restaurantmodule {}
