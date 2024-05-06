import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
@Controller('clients')
export class ClientsControlller {
  constructor(private readonly clientsService: ClientsService) {}
  @Post()
  //methode1)
  addClients(
    @Body('nom') cliNom: string,
    @Body('prenom') cliPrenom: string,
    @Body('tel') cliTel: string,
  ) {
    const generatedId = this.clientsService.insertClient(
      cliNom,
      cliPrenom,
      cliTel,
    );
    return { id: generatedId };
  }
  @Get()
  //methode2)
  getAllClients() {
    //return [{ label: '', value: 'test' }];
    return this.clientsService.getClients();
  }
  @Get(':id')
  //methode3)
  getClient(@Param(':id') cliId: number) {
    return this.clientsService.getSingleClient(cliId);
  }
  @Patch(':id')
  //methode4)
  updateClient(
    @Param('id') cliId: number,
    @Body('nom') cliNom: string,
    @Body('prenom') cliPrenom: string,
    @Body('tel') cliTel: string,
  ) {
    this.clientsService.updateClient(cliId, cliNom, cliPrenom, cliTel);
    return null;
  }
  @Delete(':id')
  //methode5)
  removeClient(@Param(':id') cliId: number) {
    this.clientsService.deleteClient(cliId);
    return null;
  }
}
