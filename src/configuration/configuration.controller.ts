import { Controller, Get, Param } from '@nestjs/common';
import { configurationService } from './configuration.service';

@Controller('configuration')
export class configurationController {
  constructor(private readonly configurationservice: configurationService) {}

  @Get('config/:Departement')
  testConfiguration(@Param('Departement') Departement: string) {
    this.configurationservice.mytest(Departement);
  }
}
