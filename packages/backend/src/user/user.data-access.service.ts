import { User as UserEntity } from '@prisma/client';
import { User as UserModel } from './model/user.model';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
class UserDataAccessService {
  constructor(private readonly userRepository: UserRepository) {}

  mapUserEntityToModel(userEntity: UserEntity): UserModel {
    return {
      id: userEntity.id,
      firstName: userEntity.firstName,
      lastName: userEntity.lastName,
      email: userEntity.email,
      password: userEntity.password,
      avatar: userEntity.avatar,
      addresses: userEntity['addresses'],
      reviews: userEntity['reviews'],
      createdAt: userEntity.createdAt,
      updatedAt: userEntity.updatedAt,
    };
  }

  async me(id: number): Promise<UserModel> {
    const userEntity: UserEntity = await this.userRepository.me({ id });
    return this.mapUserEntityToModel(userEntity);
  }
}

export default UserDataAccessService;
