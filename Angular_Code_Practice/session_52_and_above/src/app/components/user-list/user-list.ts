import { Component, WritableSignal, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { user } from '../../services/userDataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  constructor(private userService:UserService, private router: Router){}

  //users: WritableSignal<{id: number, name: string, age: number}[]> = signal<{id: number, name: string, age: number}[]>()
  users: WritableSignal<user[]> = signal<user[]>([])

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
      this.userService.getUsers().subscribe((data) => {
      //console.log(data);
      this.users.set(data);
      }
    )
  }

  deleteUser(id: string | undefined){
    //console.log("delete user with id", id);
    if(id){
      this.userService.deleteUser(id).subscribe((resp) =>{
        if(resp){
          //this.users.update(users => users.filter(u => u.id !== id));
          this.getUsers();
        }
    })
  }
  }

  editUser(id: string | undefined){
    console.log("edit user with id", id);
    if(id){
      this.router.navigate(['edit', id]);
    }
  }
}
