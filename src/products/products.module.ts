import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { User } from 'src/user/user.entity';
import { Category } from 'src/categories/category.entity';
import { ProductImagesModule } from './product-images/product-images.module';
import { ProductVariantsModule } from './product-variants/product-variants.module';
import { ProductVariantOptionModule } from './product-variant-option/product-variant-option.module';
import { VariantsModule } from './variants/variants.module';
import { VariantOptionsModule } from './variant-options/variant-options.module';
import { ProductImage } from './product-images/product-image.entity';
import { Tag } from 'src/tags/tag.entity';
import { Brand } from 'src/brands/brand.entity';
import { ProductVariant } from './product-variants/product-variant.entity';
import { Inventory } from 'src/inventory/inventory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      User,
      Category,
      ProductImage,
      Tag,
      Brand,
      ProductVariant,
      Inventory,
    ]),
    ProductImagesModule,
    ProductVariantsModule,
    ProductVariantOptionModule,
    VariantsModule,
    VariantOptionsModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
