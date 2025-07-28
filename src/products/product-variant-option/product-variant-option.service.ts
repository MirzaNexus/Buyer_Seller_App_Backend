import { Injectable } from '@nestjs/common';
import { CreateProductVariantOptionDto } from './dto/create-product-variant-option.dto';
import { UpdateProductVariantOptionDto } from './dto/update-product-variant-option.dto';

@Injectable()
export class ProductVariantOptionService {
  create(createProductVariantOptionDto: CreateProductVariantOptionDto) {
    return 'This action adds a new productVariantOption';
  }

  findAll() {
    return `This action returns all productVariantOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productVariantOption`;
  }

  update(id: number, updateProductVariantOptionDto: UpdateProductVariantOptionDto) {
    return `This action updates a #${id} productVariantOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} productVariantOption`;
  }
}
