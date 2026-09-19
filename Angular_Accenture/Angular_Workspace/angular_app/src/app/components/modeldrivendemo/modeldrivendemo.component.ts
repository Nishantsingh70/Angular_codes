import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldrivendemo',
  templateUrl: './modeldrivendemo.component.html',
  styleUrls: ['./modeldrivendemo.component.css'],
})
export class ModeldrivendemoComponent {
  customer_data: any;

  constructor() {
    this.customer_data = new FormGroup({
      cid: new FormControl('', [Validators.required]),
      cname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormGroup({
        ccity: new FormControl(''),
        ccountry: new FormControl(''),
      }),
    });
  }

  saveCustomer() {}
}
