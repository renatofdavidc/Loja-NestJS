import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListUserDTO } from './dto/listUser.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async listUsers() {
    const savedUsers = await this.userRepository.list();
    const usersList = savedUsers.map(
        (user) => new ListUserDTO(user.id, user.name)
    )

    return usersList
  }
}
