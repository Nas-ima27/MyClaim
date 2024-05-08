import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { State } from '../Requests/dao/requests.entity';
@Entity()
export class Complaint extends Request {
  @PrimaryGeneratedColumn()
  reqId: number;
  @Column()
  city: string;
  @Column()
  date: Date;
  @Column()
  contractNumber: number;
  @Column()
  complaintType: string;
  @Column()
  department: string;
  @Column({
    type: 'enum',
    enum: State,
    default: State.INACTIVE,
  })
  state: State;
}
