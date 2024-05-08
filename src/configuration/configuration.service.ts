import { Injectable } from '@nestjs/common';

@Injectable()
export class configurationService {
  constructor() {}
  mytest(Departement: string) {
    console.log(`departement: ${Departement}`);
  }
}
