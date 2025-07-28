import { Test, TestingModule } from '@nestjs/testing';
import { ProductVariantOptionService } from './product-variant-option.service';

describe('ProductVariantOptionService', () => {
  let service: ProductVariantOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductVariantOptionService],
    }).compile();

    service = module.get<ProductVariantOptionService>(ProductVariantOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
