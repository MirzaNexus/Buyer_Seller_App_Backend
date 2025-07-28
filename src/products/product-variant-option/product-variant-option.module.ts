import { Module } from '@nestjs/common';
import { ProductVariantOptionService } from './product-variant-option.service';
import { ProductVariantOptionController } from './product-variant-option.controller';

@Module({
  controllers: [ProductVariantOptionController],
  providers: [ProductVariantOptionService],
})
export class ProductVariantOptionModule {}
