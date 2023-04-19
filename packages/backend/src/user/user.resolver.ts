import 'reflect-metadata';
import { Args, Query, Resolver } from '@nestjs/graphql';
import UserInput from './dto/user.input';
import UserService from './user.service';
import { User } from './model/user.model';

@Resolver(() => User)
class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async me(@Args('userInput') userInput: UserInput): Promise<User> {
    return this.userService.me(userInput.id);
  }
}

export default UserResolver;
