import { Args, Query, Resolver } from '@nestjs/graphql';
import Restaurant from './model/restaurant.model';
import { SearchInput } from './dto/search.input';
import RestaurantService from './restaurant.service';
import { SearchOutput } from './dto/search.output';

@Resolver(() => Restaurant)
class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  // TODO - This topPick must be in product resolver not restaurant resolver
  @Query(() => [SearchOutput])
  async topPick(): Promise<SearchOutput[] | []> {
    return this.restaurantService.topPick();
  }

  @Query(() => [SearchOutput])
  async search(
    @Args('searchInput') searchInput: SearchInput,
  ): Promise<SearchOutput[] | []> {
    return this.restaurantService.search(searchInput);
  }
}

export default RestaurantResolver;
