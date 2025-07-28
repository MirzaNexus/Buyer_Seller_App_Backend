import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VariationOption } from '../variant-options/variant-option.entity';

@Entity('variations')
export class Variation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;

  @OneToMany(() => VariationOption, (option) => option.variation, {
    cascade: true,
    eager: true,
  })
  options: VariationOption[];
}
