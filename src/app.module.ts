import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReqModule } from './Requests/req.module';

@Module({
  imports: [ReqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
