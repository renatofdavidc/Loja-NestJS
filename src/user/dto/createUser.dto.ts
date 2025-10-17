import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsEmailUnique } from '../validator/unique-email.validator';

export class createUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  name: string;

  @IsEmail(undefined, { message: 'O email deve ser válido!' })
  @IsEmailUnique({ message: 'Já existe um usuário com este email!' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter no mínimo 6 caracteres!' })
  password: string;
}
