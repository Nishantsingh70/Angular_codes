import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedrivendemo',
  templateUrl: './templatedrivendemo.component.html',
  styleUrls: ['./templatedrivendemo.component.css']
})
export class TemplatedrivendemoComponent {

  saveCustomer(formdata: string){
    console.log(formdata);
  }
}
