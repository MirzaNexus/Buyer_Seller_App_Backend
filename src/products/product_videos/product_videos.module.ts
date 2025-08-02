import { Module } from '@nestjs/common';
import { ProductVideosService } from './product_videos.service';
import { ProductVideosController } from './product_videos.controller';

@Module({
  controllers: [ProductVideosController],
  providers: [ProductVideosService],
})
export class ProductVideosModule {}
