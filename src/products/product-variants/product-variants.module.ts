import { Module } from '@nestjs/common';
import { ProductVariantsService } from './product-variants.service';
import { ProductVariantsController } from './product-variants.controller';
import { ProductVariantOptionModule } from './product-variant-option/product-variant-option.module';

@Module({
  controllers: [ProductVariantsController],
  providers: [ProductVariantsService],
  imports: [ProductVariantOptionModule],
})
export class ProductVariantsModule {}
