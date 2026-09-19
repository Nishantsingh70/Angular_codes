import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  @Input() emp_Name: string | undefined=""; 
  @Output() my_event = new EventEmitter();
  
  sendData(){
    this.my_event.emit(this.emp_Name?.toUpperCase());
  }
}
