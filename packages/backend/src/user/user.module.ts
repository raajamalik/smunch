import { Module } from '@nestjs/common';
import UserService from './user.service';
import UserResolver from './user.resolver';
import UserDataAccessService from './user.data-access.service';
import { UserRepository } from './user.repository';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [UserResolver, UserService, UserDataAccessService, UserRepository],
})
export class UserModule {}
