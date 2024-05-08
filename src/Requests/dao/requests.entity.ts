import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export enum State {
  DONE = 'DONE',
  INACTIVE = 'INACTIVE',
  PROCESSING = 'PROCESSING',
  SUSPENDED = 'SUSPENDED',
}
export enum Req_Type {
  CLAIM = 'CLAIM',
  COMPLAINT = 'COMPLAINT',
}
export enum Cli_Type {
  CLIENT = 'CLIENT',
  AGENT = 'AGENT',
  GESTIONNAIRE = 'GESTIONNAIRE',
}
@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  reqId: number;

  @Column({ type: 'enum', enum: Cli_Type })
  reqType: Req_Type;

  @Column()
  clientType: Cli_Type;

  @Column()
  clientId: number;

  @Column()
  date: Date;

  @Column({
    type: 'enum',
    enum: State,
    default: State.INACTIVE,
  })
  state: State;
}
