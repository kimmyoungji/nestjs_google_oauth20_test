import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number; // important to have own id of app

  @Column()
  email: string;

  @Column()
  displayName: string;
}
