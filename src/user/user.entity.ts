import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column("text", {array: true, default: ['buyer']})
  roles: string[];

}
