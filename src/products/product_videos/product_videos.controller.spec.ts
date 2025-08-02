import { Test, TestingModule } from '@nestjs/testing';
import { ProductVideosController } from './product_videos.controller';
import { ProductVideosService } from './product_videos.service';

describe('ProductVideosController', () => {
  let controller: ProductVideosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductVideosController],
      providers: [ProductVideosService],
    }).compile();

    controller = module.get<ProductVideosController>(ProductVideosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
