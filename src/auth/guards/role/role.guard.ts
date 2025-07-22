// seller.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class SellerGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();

    const token = req.cookies['access_token'];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }

    try {
      const decoded = await this.jwtService.verifyAsync(token);

      if (decoded.role === 'seller') {
        req['user'] = decoded;
        return true;
      } else {
        throw new ForbiddenException('You are not authorized as seller');
      }
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
