import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity()
export class demandType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
  @Column('name')
  name: string;
  @Column('description')
  description: string;
  @Column('departemnt_id')
  departementId: string;
}
