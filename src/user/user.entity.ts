import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  BUYER = 'buyer',
  SELLER = 'seller',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({select: false})
  password: string;

  @Column({type: 'enum', enum: UserRole, default: UserRole.BUYER})
  role: UserRole;
}
