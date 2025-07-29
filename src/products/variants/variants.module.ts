import { Module } from '@nestjs/common';
import { VariantsService } from './variants.service';
import { VariantsController } from './variants.controller';
import { VariationOption } from '../variant-options/variant-option.entity';

@Module({
  imports: [VariationOption],
  controllers: [VariantsController],
  providers: [VariantsService],
})
export class VariantsModule {}
