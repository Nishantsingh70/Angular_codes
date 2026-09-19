import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  customers = [
    {
      cid: 101,
      cname: 'Sachin',
      ccontact: 12345,
    },
    {
      cid: 102,
      cname: 'Suresh',
      ccontact: 123445,
    },
    {
      cid: 103,
      cname: 'Manish',
      ccontact: 12225,
    },
  ];

  getCustomerById(eno: number) {
    return this.customers.filter((customer) => customer.cid === eno);
  }
}
