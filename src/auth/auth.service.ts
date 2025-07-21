import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/user/user.entity';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  // Register a new user
  async register({ username, email, password, role }: RegisterDto) {
    const existingUser = await this.userRepo.findOne({
      where: [{ username }, { email }],
    });

    if (existingUser) {
      if (existingUser.username === username) {
        throw new ConflictException('Username already exists');
      } else {
        throw new ConflictException('Email already exists');
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const userRole =
      role === UserRole.SELLER ? UserRole.SELLER : UserRole.BUYER;

    const userObject = this.userRepo.create({
      username,
      email,
      password: hashedPassword,
      role: userRole,
    });

    const savedUser = await this.userRepo.save(userObject);
    delete (savedUser as any).password; // Remove password from the response
    return { message: 'User created successfully', user: savedUser };
  }

  // Login a user

  async login({ username, password }: LoginDto) {
    const user = await this.userRepo.findOne({
      where: { username },
      select: ['id', 'username', 'email', 'password', 'role'],
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.username, id: user.id, role: user.role };
    const token = this.jwtService.sign(payload);

    return {
      message: 'Login Successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      access_token: token,
    };
  }
}
