import { SearchOutput } from './search.output';

describe('SearchOutput', () => {
  it('should create an instance of SearchOutput', () => {
    const searchOutput = new SearchOutput();
    expect(searchOutput).toBeDefined();
  });

  it('should set the "name" property when passed in', () => {
    const searchOutput = new SearchOutput();
    searchOutput.name = 'Test Restaurant';
    expect(searchOutput.name).toEqual('Test Restaurant');
  });

  it('should set the "averageRating" property when passed in', () => {
    const searchOutput = new SearchOutput();
    searchOutput.averageRating = 4.5;
    expect(searchOutput.averageRating).toEqual(4.5);
  });

  it('should set the "latestReview" property when passed in', () => {
    const searchOutput = new SearchOutput();
    searchOutput.latestReview = 'This restaurant is amazing!';
    expect(searchOutput.latestReview).toEqual('This restaurant is amazing!');
  });
});
