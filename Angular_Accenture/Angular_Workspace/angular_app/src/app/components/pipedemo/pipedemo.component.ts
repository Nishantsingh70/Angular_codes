import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent {

  customers = [
    {
      cid: 101,
      cname: 'Sachin',
      ccontact: 12345,
      gender: "Male",
      salary: 15000
    },
    {
      cid: 102,
      cname: 'Suresh',
      ccontact: 123445,
      gender: "Male",
      salary: 22000
    },
    {
      cid: 103,
      cname: 'Seema',
      ccontact: 12225,
      gender: "Female",
      salary: 17000
    },
    {
      cid: 104,
      cname: 'Rajeev',
      ccontact: 4232425,
      gender: "Male",
      salary: 18000
    },
  ];


  today = new Date();
}
