import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity()
export class demands {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
  @Column('demand_number')
  demandNumber: string;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column('user_id')
  userId: string;
  @Column()
  policyId: string;
  @Column()
  demandTypeId: string;
  @Column()
  departmentId: string;
}
