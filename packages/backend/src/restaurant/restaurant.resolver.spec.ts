import { Test, TestingModule } from '@nestjs/testing';
import RestaurantResolver from './restaurant.resolver';
import RestaurantService from './restaurant.service';
import { SearchInput } from './dto/search.input';
import { SearchOutput } from './dto/search.output';

describe('RestaurantResolver', () => {
  let resolver: RestaurantResolver;
  let service: RestaurantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RestaurantResolver,
        {
          provide: RestaurantService,
          useValue: {
            topPick: jest.fn(),
            search: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<RestaurantResolver>(RestaurantResolver);
    service = module.get<RestaurantService>(RestaurantService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('topPick', () => {
    it('should call topPick method of RestaurantService and return the result', async () => {
      const result: SearchOutput[] = [
        {
          id: 1,
          name: 'Restaurant1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Restaurant2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(service, 'topPick').mockResolvedValue(result);

      expect(await resolver.topPick()).toEqual(result);
      expect(service.topPick).toHaveBeenCalled();
    });
  });

  describe('search', () => {
    it('should call search method of RestaurantService with given input and return the result', async () => {
      const input: SearchInput = { name: 'Test Restaurant', cuisine: 123 };
      const result: SearchOutput[] = [
        {
          id: 1,
          name: 'Restaurant1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Restaurant2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(service, 'search').mockResolvedValue(result);

      expect(await resolver.search(input)).toEqual(result);
      expect(service.search).toHaveBeenCalledWith(input);
    });
  });
});
