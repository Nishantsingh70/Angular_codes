import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  employee_data: any;

  constructor(){
    this.employee_data = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      city: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
    })
  }

  saveCustomer(){
    console.log(this.employee_data.value);
  }
}
