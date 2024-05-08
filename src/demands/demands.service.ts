import { Injectable } from '@nestjs/common';

@Injectable()
export class demandsService {
  constructor() {}

  myDemand(demandType: string) {
    console.log(`demand type: ${demandType}`);
  }
}
