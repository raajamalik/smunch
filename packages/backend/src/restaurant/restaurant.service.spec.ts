import { Test, TestingModule } from '@nestjs/testing';
import RestaurantDataAccessService from './restaurant.data-access.service';
import RestaurantService from './restaurant.service';
import { SearchInput } from './dto/search.input';
import { SearchOutput } from './dto/search.output';
import Restaurant from './model/restaurant.model';
import { Review } from 'src/review/model/review.model';

describe('RestaurantService', () => {
  let restaurantService: RestaurantService;
  let restaurantDataAccessService: RestaurantDataAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RestaurantService,
        {
          provide: RestaurantDataAccessService,
          useValue: {
            search: jest.fn(),
            topPick: jest.fn(),
          },
        },
      ],
    }).compile();

    restaurantService = module.get<RestaurantService>(RestaurantService);
    restaurantDataAccessService = module.get<RestaurantDataAccessService>(
      RestaurantDataAccessService,
    );
  });

  describe('search', () => {
    const mockSearchResult: Restaurant[] = [
      {
        id: 1,
        name: 'Mock Restaurant 1',
        reviews: [
          {
            id: 1,
            title: 'Great food!',
            rating: 4,
            content: 'I love the food!',
            restaurantId: 1,
            authorId: 1,
            createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
            updatedAt: new Date(),
          },
          {
            id: 2,
            content: 'I hate the food!',
            restaurantId: 1,
            authorId: 1,
            title: 'Bad service',
            rating: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        addresses: [],
        cuisine: {
          id: 1,
          name: 'American',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        latitude: 0,
        longitude: 0,
        products: [],
        photos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1,
        name: 'Mock Restaurant 2',
        reviews: [
          {
            id: 3,
            title: 'Great food!',
            rating: 4,
            content: 'I love the food!',
            restaurantId: 1,
            authorId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 4,
            content: 'I hate the food!',
            restaurantId: 1,
            authorId: 1,
            title: 'Bad service',
            rating: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        addresses: [],
        cuisine: {
          id: 2,
          name: 'German',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        latitude: 0,
        longitude: 0,
        products: [],
        photos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    it('should return search results', async () => {
      const searchInput: SearchInput = {
        name: 'Mock Restaurant 1',
        cuisine: 1,
      };
      jest
        .spyOn(restaurantDataAccessService, 'search')
        .mockResolvedValue(mockSearchResult);
      const result: SearchOutput[] = await restaurantService.search(
        searchInput,
      );

      expect(result).toBeDefined();
      expect(result.length).toBe(mockSearchResult.length);

      //   for (let i = 0; i < result.length; i++) {
      //     const restaurant = mockSearchResult[i];
      //     expect(result[i]).toEqual({
      //       id: restaurant.id,
      //       name: restaurant.name,
      //       averageRating: 3,
      //       createdAt: restaurant.createdAt,
      //       updatedAt: restaurant.updatedAt,
      //     });
      //   }
    });
  });

  describe('getAvgRating', () => {
    it('should return 0 when there are no reviews', () => {
      const reviews: Review[] = [];
      expect(restaurantService.getAvgRating(reviews)).toEqual(0);
    });

    it('should calculate the average rating correctly', () => {
      const reviews: Review[] = [
        {
          id: 1,
          title: 'Review 1',
          content: 'Review 1 content',
          restaurantId: 1,
          authorId: 1,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Review 2',
          content: 'Review 2 content',
          restaurantId: 2,
          authorId: 1,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Review 3',
          content: 'Review 3 content',
          restaurantId: 3,
          authorId: 1,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      expect(restaurantService.getAvgRating(reviews)).toEqual(4);
    });
  });

  describe('getLatestReviews', () => {
    it('should return an empty string when there are no reviews', () => {
      const reviews: Review[] = [];
      expect(restaurantService.getLatestReviews(reviews)).toEqual('');
    });

    it('should return the title of the latest review', () => {
      const reviews: Review[] = [
        {
          id: 1,
          title: 'Review 1',
          content: 'Review 1 content',
          restaurantId: 1,
          authorId: 1,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Review 2',
          content: 'Review 2 content',
          restaurantId: 2,
          authorId: 1,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Review 3',
          content: 'Review 3 content',
          restaurantId: 3,
          authorId: 1,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      expect(restaurantService.getLatestReviews(reviews)).toEqual('Review 3');
    });
  });
});
