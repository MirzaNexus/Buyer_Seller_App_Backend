import { PartialType } from '@nestjs/mapped-types';
import { CreateProductVideoDto } from './create-product_video.dto';

export class UpdateProductVideoDto extends PartialType(CreateProductVideoDto) {}
