import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VariationOption } from '../variant-options/variant-option.entity';
import { ProductVariant } from '../product-variants/product-variant.entity';

@Entity('product_variant_options')
export class ProductVariantOption {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ProductVariant, (variant) => variant.options, {
    onDelete: 'CASCADE',
  })
  variant: ProductVariant;

  @ManyToOne(() => VariationOption, (option) => option.productVariantOptions, {
    onDelete: 'CASCADE',
  })
  option: VariationOption;
}
