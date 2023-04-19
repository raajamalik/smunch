import { Test, TestingModule } from '@nestjs/testing';
import Restaurant from './restaurant.model';
import Address from '../../common/models/address.model';
import { Cuisine } from '../../common/models/cuisine.model';
import { Photo } from '../../common/models/photo.model';
import { Product } from '../../product/product.model';
import { Review } from '../../review/model/review.model';
import { validateSync } from 'class-validator';

describe('Restaurant', () => {
  let restaurantModel: Restaurant;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: Restaurant,
          useValue: {},
        },
      ],
    }).compile();

    restaurantModel = moduleRef.get<Restaurant>(Restaurant);
  });

  describe('constructor', () => {
    it('should create a new instance of Restaurant', () => {
      expect(restaurantModel).toBeDefined();
    });
    it('should create a restaurant instance', () => {
      const restaurant = new Restaurant();
      restaurant.name = 'My Restaurant';
      restaurant.addresses = [new Address()];
      restaurant.latitude = 10.12345;
      restaurant.longitude = 20.12345;
      restaurant.photos = [new Photo()];
      restaurant.cuisine = new Cuisine();
      restaurant.products = [new Product()];
      restaurant.reviews = [new Review()];

      const errors = validateSync(restaurant);
      expect(errors.length).toEqual(0);
    });
  });
});
