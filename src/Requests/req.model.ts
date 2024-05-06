export enum Enumerator {
  'Reclamation',
  'sinistre',
}
export class Request {
  ReqId: number;
  ClientId: number;
  ReqType: Enumerator;
  ReqDate: Date;

  constructor(id: number, type: Enumerator, client: number, date: Date) {
    this.ReqId = id;
    this.ReqType = type;
    this.ReqDate = date;
    this.ClientId = client;
  }
}
