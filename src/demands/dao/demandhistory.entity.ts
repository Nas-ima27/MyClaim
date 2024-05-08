import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
export enum historyAction {
  TARITER = 'TRAITER',
  ENCOURS = 'EN COURS',
  TRANSFERER = 'TRANSFERER',
  CLOTURER = 'CLOTURER',
  ENATTENTE = 'EN ATTENTE',
}
@Entity()
export class demandHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
  @Column('demand_id')
  demandId: string;
  @Column({
    type: 'enum',
    enum: historyAction,
  })
  historyActionDemand: historyAction;
  @Column('user_id')
  userId: string;
  @Column('departement_id')
  departementId: string;
}
