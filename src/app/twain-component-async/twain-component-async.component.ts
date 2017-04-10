import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/userservice.service';
import { UserModel } from './../models/userModel';

@Component({
  selector: 'twain-quote',
  template: '<p class="twain"><i>{{quote}}</i></p>',
  providers: [UserService]

})
export class TwainComponentAsyncComponent implements OnInit {

  intervalId: number;
  users: UserModel[];
  quote: string = "...";
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getquote().then(quote => this.quote = quote);
  }

}
