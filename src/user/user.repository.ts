import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  private async findById(id: string) {
    const potentialUser = this.users.find((savedUser) => savedUser.id === id);
    if (!potentialUser) {
      throw new Error('Usuário não existe!');
    }
    return potentialUser;
  }

  async save(user: UserEntity) {
    this.users.push(user);
    console.log(this.users);
  }

  async list() {
    return this.users;
  }

  async existsWithEmail(email: string) {
    const potentialUser = this.users.find((user) => user.email === email);
    return potentialUser !== undefined;
  }

  async update(id: string, data: Partial<UserEntity>) {
    const potentialUser = await this.findById(id);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      potentialUser[key] = value;
    });

    return potentialUser;
  }

  async remove(id: string) {
    const potentialUser = this.findById(id);
    this.users = this.users.filter((savedUser) => savedUser.id !== id);

    return potentialUser;
  }
}
