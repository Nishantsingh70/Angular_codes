import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  constructor(private httpClient: HttpClient) {}

  customerList: any;
  userList: any;

  getAllCustomers() {
    this.httpClient
      .get<{customers: any[]}>('http://localhost:4200/../assets/customers.json')
      .subscribe((data) => {
        console.log(data);
        this.customerList = data.customers;
      });
  }

  getUsersFromAPI(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data)=>{
      console.log(data);
      this.userList = data;
    })
  }
}
