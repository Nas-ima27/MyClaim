import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Request } from '../entities/requests.entity';
import { Claim } from '../entities/Claim.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Claim])],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
