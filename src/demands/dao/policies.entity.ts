import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity()
export class policies {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
  @Column('policy_number')
  policyNumber: string;
  @Column('policy_subscriber')
  policySubscriber: string;
  @Column('effective_date')
  effectiveDate: Date;
}
