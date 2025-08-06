import { Module } from '@nestjs/common';
import { ProductVideosService } from './product_videos.service';
import { ProductVideosController } from './product_videos.controller';
import { ProductVideo } from './product_video.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductVideo])],
  controllers: [ProductVideosController],
  providers: [ProductVideosService],
})
export class ProductVideosModule {}
