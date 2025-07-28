import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Variation } from '../variants/variant.entity';
import { ProductVariantOption } from '../product-variant-option/product-variant-option.entity';

@Entity('variation_options')
export class VariationOption {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Variation, (variation) => variation.options, {
    onDelete: 'CASCADE',
  })
  variation: Variation;

  @OneToMany(() => ProductVariantOption, (pvo) => pvo.option)
  productVariantOptions: ProductVariantOption[];
}
