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
import { Response, Request } from 'express';

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

    const userObject = await this.userRepo.create({
      username,
      email,
      password: hashedPassword,
      role: userRole,
    });

    const savedUser = await this.userRepo.save(userObject);
    delete (savedUser as any).password; // const { password, ...userWithoutPassword } = savedUser;S
    return { message: 'User created successfully', user: savedUser };
  }

  // Login a user

  async login({ username, password }: LoginDto, res: Response, req?: Request) {
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

    const existingToken = req?.cookies?.access_token;
    let tokenStatus = 'new';
    if (existingToken) {
      try {
        await this.jwtService.verifyAsync(existingToken);
        return {
          message: 'Already logged in',
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
          },
        };
      } catch (e) {
        tokenStatus = 'renewed';
      }
    }

    const payload = {
      username: user.username,
      id: user.id,
      role: user.role,
    };
    const token = await this.jwtService.signAsync(payload);

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    return {
      message:
        tokenStatus === 'renewed'
          ? 'Session renewed (expired/invalid token replaced)'
          : 'Login Successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }
}
