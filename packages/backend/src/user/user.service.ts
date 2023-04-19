import { Injectable } from '@nestjs/common';
import UserDataAccessService from './user.data-access.service';
import { User } from './model/user.model';

@Injectable()
class UserService {
  constructor(private readonly userDataAccessService: UserDataAccessService) {}

  async me(id: number): Promise<User> {
    return await this.userDataAccessService.me(id);
  }
}

export default UserService;
