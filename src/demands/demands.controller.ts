import { Controller, Get, Param } from '@nestjs/common';

import { demandsService } from './demands.service';

@Controller('demands')
export class demandsController {
  constructor(private readonly demandservice: demandsService) {}
  @Get('demands/:demandType')
  myDemands(@Param('demandType') demandType: string) {
    this.demandservice.myDemand(demandType);
  }
}
