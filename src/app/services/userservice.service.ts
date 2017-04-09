import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  isLoggedIn: boolean = true;
  user = {
    name: 'Test User',
    family: 'asgari',
    age: 35
  };

  constructor() { }



  getUser() {
    return this.user;
  }

}
