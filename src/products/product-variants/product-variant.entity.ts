import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Product } from '../product.entity';
import { ProductVariantOption } from '../product-variant-option/product-variant-option.entity';
import { Inventory } from 'src/inventory/inventory.entity';

@Entity('product_variants')
@Unique(['product', 'sku'])
export class ProductVariant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, (product) => product.variants, {
    onDelete: 'CASCADE',
  })
  product: Product;

  @Column({ type: 'varchar', length: 100, unique: true })
  sku: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  discount: number;

  @Column({ nullable: true })
  image_url: string;

  @OneToMany(() => Inventory, (inventory) => inventory.variant, {
    cascade: true,
  })
  inventories: Inventory[];

  @OneToMany(() => ProductVariantOption, (pvo) => pvo.variant, {
    cascade: true,
  })
  options: ProductVariantOption[];
}
