import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { Category } from 'src/categories/category.entity';
import { ProductImage } from './product-images/product-image.entity';
import { Brand } from 'src/brands/brand.entity';
import { Tag } from 'src/tags/tag.entity';
import { Inventory } from 'src/inventory/inventory.entity';
import { ProductVariant } from './product-variants/product-variant.entity';
import { ProductVideo } from './product_videos/product_video.entity';

export enum ProductStatus {
  Draft = 'draft',
  Active = 'active',
  Inactive = 'inactive',
}

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'seller_id' })
  seller: User;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  slug: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  discount_price: number | null;

  @Column({ type: 'timestamp', nullable: true })
  discount_start_date: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  discount_end_date: Date | null;

  @Column({ type: 'varchar', length: 100, unique: true })
  sku: string;

  @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.Draft })
  status: ProductStatus;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  shipping_weight: number | null;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  //Relationships

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images: ProductImage[];

  @OneToMany(() => ProductVideo, (productVideo) => productVideo.product, {
    cascade: true,
  })
  videos?: ProductVideo[];

  @ManyToMany(() => Category, (category) => category.products, {
    cascade: true,
  })
  @JoinTable()
  categories: Category[];

  @ManyToOne(() => Brand, (brand) => brand.products, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @ManyToMany(() => Tag, (tag) => tag.products, { cascade: true })
  @JoinTable()
  tags: Tag[];

  @OneToMany(() => Inventory, (inventory) => inventory.product, {
    cascade: true,
    eager: true,
  })
  inventories: Inventory[];

  @OneToMany(() => ProductVariant, (productVariant) => productVariant.product, {
    cascade: true,
    eager: true,
  })
  variants: ProductVariant[];
}
