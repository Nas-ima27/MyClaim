import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { demands } from './dao/demands.entity';
import { demandsService } from './demands.service';
import { demandsController } from './demands.controller';
import { demandHistory } from './dao/demandhistory.entity';
import { policies } from './dao/policies.entity';
@Module({
  imports: [TypeOrmModule.forFeature([demands, demandHistory, policies])],
  controllers: [demandsController],
  providers: [demandsService],
})
export class demandsModule {}
