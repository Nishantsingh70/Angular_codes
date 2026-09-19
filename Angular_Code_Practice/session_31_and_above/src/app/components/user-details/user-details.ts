import { Component, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  constructor(public router: ActivatedRoute, public userService: UserService){}

  users: WritableSignal<{id: number, name: string, age: number, email: string, city: string}[]> = signal<{id: number, name: string, age: number, email: string, city: string}[]>([]);
  filtereduser: WritableSignal<{id: number, name: string, age: number, email: string, city: string} | null> = signal<{id: number, name: string, age: number, email: string, city: string} | null>(null);
  

  ngOnInit(){
    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.users.set(this.userService.userList());

      const filteredData = this.users().filter((users)=> {
        return users.id == params['id'];
      })

      this.filtereduser.set(filteredData[0]);
    })
  }

}
