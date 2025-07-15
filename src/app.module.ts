import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Use PostgreSQL
      host: 'localhost', // DB host
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // DB username
      password: 'postgres', // DB password
      database: 'postgres', // DB name

      entities: [], // <-- Register entities (tables)
      synchronize: true, // Auto-create tables from entities
      autoLoadEntities: true, // Optional: auto load entities from imported modules
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
