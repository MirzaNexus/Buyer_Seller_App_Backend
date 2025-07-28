import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from 'src/products/product.entity';
import { ProductVariant } from 'src/products/product-variants/product-variant.entity';

export enum InventoryType {
  PURCHASE = 'purchase',
  DAMAGE = 'damage',
  RESTOCK = 'restock',
  RETURN = 'return',
  MANUAL_ADJUSTMENT = 'manual_adjustment',
}

@Entity()
@Check(
  `("productId" IS NOT NULL AND "variantId" IS NULL) OR ("productId" IS NULL AND "variantId" IS NOT NULL)`,
)
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.inventories, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => ProductVariant, (variant) => variant.inventories, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'variant_id' })
  variant: ProductVariant;

  @Column({ type: 'int', default: 0 })
  stock_quantity: number;

  @Column({ type: 'int', default: 0 })
  low_stock_threshold: number;

  @Column({ default: false })
  is_out_of_stock: boolean;

  @Column({
    type: 'enum',
    enum: InventoryType,
    default: InventoryType.PURCHASE,
  })
  type: InventoryType;

  @Column({ nullable: true })
  note?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
