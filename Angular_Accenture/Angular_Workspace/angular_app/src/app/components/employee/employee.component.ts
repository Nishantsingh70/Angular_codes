import { Component } from '@angular/core';
import { DateService } from 'src/app/services/date.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})

export class EmployeeComponent {
  empName: string | undefined;
  employee_Name: string | undefined;
  cities = ['Delhi', 'Mumbai', 'Chennai'];

  employees = [
    { eid: 1, ename: 'Amit', contact: 1234 },
    { eid: 2, ename: 'Ram', contact: 14532 },
    { eid: 3, ename: 'Rahul', contact: 98432 },
  ];

  sendData() {
    this.empName = 'Rohit';
  }

  receiveData(data: string) {
    this.employee_Name = data;
  }

  isContactVisible: boolean = true;
  changeContactStatus() {
    this.isContactVisible = !this.isContactVisible;
  }

  age: number = 19;

  img_width = 200;
  img_height = 200;
  citySelected!: string;

  myclasses = {
    class1: true,
    class2: true,
    class3: true,
  };

  // Using service
  constructor(private dateService: DateService) {}

  current_date = this.dateService.getCurrentDate();
}
