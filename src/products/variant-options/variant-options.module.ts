import { Module } from '@nestjs/common';
import { VariantOptionsService } from './variant-options.service';
import { VariantOptionsController } from './variant-options.controller';

@Module({
  controllers: [VariantOptionsController],
  providers: [VariantOptionsService],
})
export class VariantOptionsModule {}
