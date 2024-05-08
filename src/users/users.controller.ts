import { Controller, Get, Param } from '@nestjs/common';
import { usersService } from './users.service';

@Controller('users')
export class usersController {
  constructor(private readonly usersservice: usersService) {}
  @Get('user/:userType')
  myUsers(@Param('userType') userType: string) {
    this.usersservice.myUser(userType); // Appel de la méthode du service pour afficher le type d'utilisateur
  }
}
