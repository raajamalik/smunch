import RestaurantDataAccessService from './restaurant.data-access.service';
import RestaurantRepository from './restaurant.repository';
import { SearchInput } from './dto/search.input';

describe('RestaurantDataAccessService', () => {
  let restaurantDataAccessService: RestaurantDataAccessService;
  let restaurantRepository: RestaurantRepository;

  beforeEach(() => {
    restaurantRepository = new RestaurantRepository(null);
    restaurantDataAccessService = new RestaurantDataAccessService(
      restaurantRepository,
    );
  });

  describe('topPick', () => {
    it('should return the top 3 restaurants', async () => {
      const restaurantEntities = [
        {
          id: 1,
          name: 'Restaurant 1',
          latitude: 1,
          longitude: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          cuisineId: 1,
        },
        {
          id: 2,
          name: 'Restaurant 2',
          latitude: 2,
          longitude: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          cuisineId: 1,
        },
        {
          id: 3,
          name: 'Restaurant 3',
          latitude: 3,
          longitude: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          cuisineId: 1,
        },
      ];
      jest
        .spyOn(restaurantRepository, 'restaurants')
        .mockResolvedValue(restaurantEntities);

      const result = await restaurantDataAccessService.topPick();
      expect(result.length).toBe(3);
      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
      expect(result[2].id).toBe(3);
    });
  });

  describe('search', () => {
    it('should return matching restaurants based on search input', async () => {
      const searchInput: SearchInput = { name: 'pizza', cuisine: 1 };
      const restaurantEntities = [
        {
          id: 1,
          name: 'Pizza Place',
          latitude: 1,
          longitude: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          cuisineId: 1,
        },
        {
          id: 2,
          name: 'Italian Restaurant',
          latitude: 2,
          longitude: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          cuisineId: 1,
        },
      ];
      jest
        .spyOn(restaurantRepository, 'search')
        .mockResolvedValue(restaurantEntities);

      const result = await restaurantDataAccessService.search(searchInput);
      expect(result.length).toBe(2);
      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
    });
    it('should return matching restaurants based on name only', async () => {
      const searchInput: SearchInput = { name: 'pizza' };
      const restaurantEntities = [
        {
          id: 1,
          name: 'Pizza Place',
          latitude: 1,
          longitude: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          cuisineId: 1,
        },
      ];
      jest
        .spyOn(restaurantRepository, 'search')
        .mockResolvedValue(restaurantEntities);

      const result = await restaurantDataAccessService.search(searchInput);
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(1);
      expect(result[0].name.toLowerCase()).toContain('pizza');
    });
    it('should return matching restaurants based on cuisine', async () => {
      const searchInput: SearchInput = { cuisine: 1 };
      const restaurantEntities = [
        {
          id: 1,
          name: 'Pizza Place',
          latitude: 1,
          longitude: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          cuisineId: 1,
        },
      ];
      jest
        .spyOn(restaurantRepository, 'search')
        .mockResolvedValue(restaurantEntities);

      const result = await restaurantDataAccessService.search(searchInput);
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(1);
      expect(result[0].name).toBe('Pizza Place');
    });
  });
});
