import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductVideosService } from './product_videos.service';
import { CreateProductVideoDto } from './dto/create-product_video.dto';
import { UpdateProductVideoDto } from './dto/update-product_video.dto';

@Controller('product-videos')
export class ProductVideosController {
  constructor(private readonly productVideosService: ProductVideosService) {}

  @Post()
  create(@Body() createProductVideoDto: CreateProductVideoDto) {
    return this.productVideosService.create(createProductVideoDto);
  }

  @Get()
  findAll() {
    return this.productVideosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productVideosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductVideoDto: UpdateProductVideoDto) {
    return this.productVideosService.update(+id, updateProductVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productVideosService.remove(+id);
  }
}
