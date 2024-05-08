import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { State } from '../Requests/dao/requests.entity';
export enum Degat {
  CORPOREL = 'CORPOREL',
  MATERIEL = 'MATERIEL',
  CORPORELETMATERIEL = 'CORPOREL ET MATERIEL',
}
@Entity()
export class Claim extends Request {
  @PrimaryGeneratedColumn()
  reqId: number;
  @Column()
  city: string;
  @Column()
  date: Date;
  @Column()
  policy: number;
  @Column()
  matricule: string;
  @Column({
    type: 'enum',
    enum: Degat,
  })
  degat: Degat;
  @Column({
    type: 'enum',
    enum: State,
    default: State.INACTIVE,
  })
  state: State;
}
