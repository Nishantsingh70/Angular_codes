import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { user } from '../../services/userDataType';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  constructor(private userService: UserService, private router: Router) { }

  name = new FormControl('');
  age = new FormControl(''); 
  
  addNewUser(){
    console.log(this.name.value);
    console.log(this.age.value);

    let name = this.name.value;
    let age = this.age.value;

    if(name && age){
      let data: user = {
      name: name,
      age: Number(age)
    };

      this.userService.addUser(data).subscribe((result) =>{
      if(result){
        this.router.navigate(['/']);
      }
      }
    )
  }

    


  }


}
