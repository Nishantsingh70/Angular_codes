import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {
  
  constructor(private Activerouter: ActivatedRoute, private router: Router, private userService: UserService){}
  name = new FormControl('');
  age = new FormControl('');
  
  ngOnInit(){
    let Id = this.Activerouter.snapshot.paramMap.get('id');
    console.log(Id);
    if(Id){
        this.userService.getUserById(Id).subscribe((data) => {
        console.log(data);
        this.name.setValue(data.name);
        this.age.setValue(data.age.toString());
      })
    }
  }

  editUser(){
    let name = this.name.value;
    let age = parseInt(this.age.value as string);
    
    let Id = this.Activerouter.snapshot.paramMap.get('id');

    if(Id && name && age){
      let data = {
        name: name,
        age: age,
        id: Id
      }

      this.userService.updateUser(data, Id).subscribe((data)=>{
        if(data){
          this.router.navigate(['/']);
        }
      })
    }

    
  }

}
