import { Test, TestingModule } from '@nestjs/testing';
import { ProductVariantOptionController } from './product-variant-option.controller';
import { ProductVariantOptionService } from './product-variant-option.service';

describe('ProductVariantOptionController', () => {
  let controller: ProductVariantOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductVariantOptionController],
      providers: [ProductVariantOptionService],
    }).compile();

    controller = module.get<ProductVariantOptionController>(ProductVariantOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
