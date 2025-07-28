import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductVariantOptionService } from './product-variant-option.service';
import { CreateProductVariantOptionDto } from './dto/create-product-variant-option.dto';
import { UpdateProductVariantOptionDto } from './dto/update-product-variant-option.dto';

@Controller('product-variant-option')
export class ProductVariantOptionController {
  constructor(private readonly productVariantOptionService: ProductVariantOptionService) {}

  @Post()
  create(@Body() createProductVariantOptionDto: CreateProductVariantOptionDto) {
    return this.productVariantOptionService.create(createProductVariantOptionDto);
  }

  @Get()
  findAll() {
    return this.productVariantOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productVariantOptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductVariantOptionDto: UpdateProductVariantOptionDto) {
    return this.productVariantOptionService.update(+id, updateProductVariantOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productVariantOptionService.remove(+id);
  }
}
