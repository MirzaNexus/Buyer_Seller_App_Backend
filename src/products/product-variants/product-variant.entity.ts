import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
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

  @Column({ type: 'varchar', length: 100 })
  sku: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  discount: number;

  @Column({ type: 'timestamp', nullable: true })
  discount_start_date: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  discount_end_date: Date | null;

  @Column({ nullable: true })
  image_url: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  shipping_weight: number | null;

  @Column({ default: false })
  is_default: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => Inventory, (inventory) => inventory.variant, {
    cascade: true,
  })
  inventories: Inventory[];

  @OneToMany(() => ProductVariantOption, (pvo) => pvo.variant, {
    cascade: true,
  })
  options: ProductVariantOption[];
}
