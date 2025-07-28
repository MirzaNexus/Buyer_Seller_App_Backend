import { Test, TestingModule } from '@nestjs/testing';
import { VariantOptionsController } from './variant-options.controller';
import { VariantOptionsService } from './variant-options.service';

describe('VariantOptionsController', () => {
  let controller: VariantOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VariantOptionsController],
      providers: [VariantOptionsService],
    }).compile();

    controller = module.get<VariantOptionsController>(VariantOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
