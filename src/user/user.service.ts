import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListUserDTO } from './dto/listUser.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';
import { updateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async createUser(userEntity: UserEntity) {
    await this.userRepository.save(userEntity)
  }

  async updateUser(id: string, userEntity: updateUserDTO) {
    await this.userRepository.update(id, userEntity)
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }

  async listUsers() {
    const savedUsers = await this.userRepository.list();
    const usersList = savedUsers.map(
        (user) => new ListUserDTO(user.id, user.name)
    )

    return usersList
  }
}
