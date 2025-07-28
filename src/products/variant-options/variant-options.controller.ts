import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VariantOptionsService } from './variant-options.service';
import { CreateVariantOptionDto } from './dto/create-variant-option.dto';
import { UpdateVariantOptionDto } from './dto/update-variant-option.dto';

@Controller('variant-options')
export class VariantOptionsController {
  constructor(private readonly variantOptionsService: VariantOptionsService) {}

  @Post()
  create(@Body() createVariantOptionDto: CreateVariantOptionDto) {
    return this.variantOptionsService.create(createVariantOptionDto);
  }

  @Get()
  findAll() {
    return this.variantOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variantOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVariantOptionDto: UpdateVariantOptionDto) {
    return this.variantOptionsService.update(+id, updateVariantOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variantOptionsService.remove(+id);
  }
}
