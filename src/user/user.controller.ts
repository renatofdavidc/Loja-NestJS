import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { createUserDTO } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/listUser.dto';
import { updateUserDTO } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
  ) {}

  @Post()
  async createUser(@Body() userData: createUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();
    
    this.userService.createUser(userEntity);
    return {
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'usuário criado com sucesso',
    };
  }

  @Get()
  async listUsers() {
    const savedusers = await this.userService.listUsers();

    return savedusers;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: updateUserDTO) {
    const updatedUser = await this.userService.updateUser(id, data);
    return {
      user: updatedUser,
      message: 'Usuário atualizado com sucesso!',
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    const removedUser = await this.userService.deleteUser(id);
    return {
      user: removedUser,
      message: 'Usuário removido com sucesso!',
    };
  }
}
