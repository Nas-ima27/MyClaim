import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestModule } from './Requests/request.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Request } from './entities/requests.entity';
import { Complaint } from './entities/complaint.entity';
import { Claim } from './entities/claim.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'NAS-ima@2002',
      database: 'myclaim',
      entities: [Complaint, Claim],
      synchronize: true,
    }),
    RequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
