import { Injectable } from '@nestjs/common';
import { CreateProductVideoDto } from './dto/create-product_video.dto';
import { UpdateProductVideoDto } from './dto/update-product_video.dto';

@Injectable()
export class ProductVideosService {
  create(createProductVideoDto: CreateProductVideoDto) {
    return 'This action adds a new productVideo';
  }

  findAll() {
    return `This action returns all productVideos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productVideo`;
  }

  update(id: number, updateProductVideoDto: UpdateProductVideoDto) {
    return `This action updates a #${id} productVideo`;
  }

  remove(id: number) {
    return `This action removes a #${id} productVideo`;
  }
}
