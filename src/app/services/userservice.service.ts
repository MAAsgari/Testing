import { Injectable } from '@angular/core';
import { UserModel } from './../models/userModel';


@Injectable()
export class UserService {
  quote = 'hi ali asgari !';
  isLoggedIn: boolean = true;
  user = {
    name: 'Test User',
    family: 'asgari',
    age: 35
  };

  private Users: [UserModel] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor() { }

  getUser() {
    return this.user;
  }

  getUsers(): Promise<UserModel[]> {
    return Promise.resolve(this.Users);
  }

  getquote(): Promise<string> {
    console.log('call service');
    return Promise.resolve(this.quote);
  }

}
