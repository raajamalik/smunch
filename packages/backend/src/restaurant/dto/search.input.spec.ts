import { SearchInput } from './search.input';

describe('SearchInput', () => {
  describe('name', () => {
    it('should be defined', () => {
      const searchInput = new SearchInput();
      searchInput.name = 'test';
      expect(searchInput.name).toBeDefined();
    });

    it('should be empty by default', () => {
      const searchInput = new SearchInput();
      expect(searchInput.name).toEqual('');
    });

    it('should be a string', () => {
      const searchInput = new SearchInput();
      searchInput.name = 'test';
      expect(typeof searchInput.name).toBe('string');
    });
  });

  describe('cuisine', () => {
    it('should be defined', () => {
      const searchInput = new SearchInput();
      searchInput.cuisine = 1;
      expect(searchInput.cuisine).toBeDefined();
    });

    it('should be nullable', () => {
      const searchInput = new SearchInput();
      expect(searchInput.cuisine).toBeUndefined();
    });

    it('should be a number', () => {
      const searchInput = new SearchInput();
      searchInput.cuisine = 1;
      expect(typeof searchInput.cuisine).toBe('number');
    });
  });
});
