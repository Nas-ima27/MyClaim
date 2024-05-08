import { Hash } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
export enum typeUser {
  AGENT = 'AGENT',
  BACKOFFICE = 'BACK-OFFICE',
  CLIENT = 'CLIENT',
}
@Entity()
export class users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
  @Column({ type: 'enum', enum: typeUser })
  userType: typeUser;
  @Column('first_name')
  firstName: string;
  @Column('last_name')
  lastName: string;
  @Column('phone')
  tel: string;
  @Column('username')
  username: string;
  @Column('password')
  password: Hash;
  @Column('departement_id')
  departementId: string;
}
