import { Injectable } from '@nestjs/common';

@Injectable()
export class usersService {
  constructor() {}
  myUser(userType: string) {
    console.log(`User Type: ${userType}`);
  }
}
