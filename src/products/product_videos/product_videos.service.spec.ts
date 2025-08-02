import { Test, TestingModule } from '@nestjs/testing';
import { ProductVideosService } from './product_videos.service';

describe('ProductVideosService', () => {
  let service: ProductVideosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductVideosService],
    }).compile();

    service = module.get<ProductVideosService>(ProductVideosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
