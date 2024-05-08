import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { departement } from './dao/departement.entity';
import { demandType } from './dao/demandtType.entity';
import { configurationController } from './configuration.controller';
import { configurationService } from './configuration.service';

@Module({
  imports: [TypeOrmModule.forFeature([departement, demandType])],
  controllers: [configurationController],
  providers: [configurationService],
})
export class configurationModule {}
