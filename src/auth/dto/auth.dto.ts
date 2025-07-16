import { UserRole } from "src/user/user.entity";
import { IsEmail, IsNotEmpty, IsEnum } from "class-validator";
export class RegisterDto {
  @IsNotEmpty({message: 'Username is required'})
  username: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({message: 'Password is required'})
  password: string;

  @IsEnum(UserRole, { message: 'Role must be buyer or seller' })
  role?: UserRole;
}
export class LoginDto {
  @IsNotEmpty({message: 'Username is required'})
  username: string;

  @IsNotEmpty({message: 'Password is required'})
  password: string;
}   