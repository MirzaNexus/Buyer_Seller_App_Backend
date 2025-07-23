import { UserRole } from 'src/user/user.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsEnum,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';
export class RegisterDto {
  @IsNotEmpty({ message: 'Username is required' })
  @MinLength(3, {
    message: 'Username minimum length is 3 characters!',
  })
  @MaxLength(20, {
    message: 'Username maximum length is 20 characters!',
  })
  username: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, {
    message: 'Password must be at least 6 characters long!',
  })
  password: string;

  @IsOptional()
  @IsEnum(UserRole, { message: 'Role must be buyer or seller' })
  role?: UserRole;
}
export class LoginDto {
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
