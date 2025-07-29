import { Module } from '@nestjs/common';
import { ProductVariantsService } from './product-variants.service';
import { ProductVariantsController } from './product-variants.controller';
import { ProductVariantOption } from '../product-variant-option/product-variant-option.entity';
import { Product } from '../product.entity';
import { Inventory } from 'src/inventory/inventory.entity';

@Module({
  imports: [ProductVariantOption, Product, Inventory],
  controllers: [ProductVariantsController],
  providers: [ProductVariantsService],
})
export class ProductVariantsModule {}
