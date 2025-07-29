import { Module } from '@nestjs/common';
import { VariantOptionsService } from './variant-options.service';
import { VariantOptionsController } from './variant-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variation } from '../variants/variant.entity';
import { ProductVariantOption } from '../product-variant-option/product-variant-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Variation, ProductVariantOption])], // Add your entities here
  controllers: [VariantOptionsController],
  providers: [VariantOptionsService],
})
export class VariantOptionsModule {}
