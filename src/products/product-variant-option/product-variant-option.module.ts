import { Module } from '@nestjs/common';
import { ProductVariantOptionService } from './product-variant-option.service';
import { ProductVariantOptionController } from './product-variant-option.controller';
import { ProductVariant } from '../product-variants/product-variant.entity';
import { VariationOption } from '../variant-options/variant-option.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVariantOption } from './product-variant-option.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductVariantOption,
      ProductVariant,
      VariationOption,
    ]),
  ],
  controllers: [ProductVariantOptionController],
  providers: [ProductVariantOptionService],
})
export class ProductVariantOptionModule {}
