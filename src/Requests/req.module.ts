import { Module } from '@nestjs/common';
import { ReqController } from './req.controller';
import { ReqService } from './req.service';
@Module({ controllers: [ReqController], providers: [ReqService] })
export class ReqModule {}
