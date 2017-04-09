import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/userservice.service';


@Component({
  selector: 'app-welcomedependency',
  template: '<h3 class="welcome" ><i>{{welcome}}</i></h3>',
  providers: [UserService]

})
export class WelcomedependencyComponent implements OnInit {
  welcome = '-- not initialized yet --';
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ?
      'Welcome, ' + this.userService.getUser().name :
      'Please log in.';
  }

}
