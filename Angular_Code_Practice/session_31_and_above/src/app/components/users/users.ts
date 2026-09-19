import { Component, WritableSignal, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  constructor(public userService: UserService){}

  userData: WritableSignal<{id: number, name: string, age: number, email: string, city: string}[]> = signal<{id: number, name: string, age: number, email: string, city: string}[]>([])
  
  ngOnInit(){
    //console.log(this.userService.userList)
    this.userData.set(this.userService.userList());
  }
}
