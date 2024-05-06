import { Module } from '@nestjs/common';
import { ClientsControlller } from './clients.controller';
import { ClientsService } from './clients.service';

@Module({ controllers: [ClientsControlller], providers: [ClientsService] })
export class ClientsModule {}
