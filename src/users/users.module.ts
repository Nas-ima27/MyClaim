import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './dao/user.entity';
import { usersService } from './users.service';
import { usersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  controllers: [usersController],
  providers: [usersService],
})
export class usersModule {}
