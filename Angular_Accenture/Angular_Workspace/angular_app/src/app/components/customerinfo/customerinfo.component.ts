import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css'],
})
export class CustomerinfoComponent {
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) {}
  customerData!: any;

  ngOnInit() {
    let customer_number = this.route.snapshot.paramMap.get('cno');
    // console.log("customer_number : " + customer_number);

    this.route.params.subscribe((param) => {
      let eno = Number(param['cno']);
      // console.log("eno : " + eno);

      let filteredCustomer = this.customerService.getCustomerById(eno);
      // console.log("filteredCustomer : " + filteredCustomer);
      // console.log("filteredCustomer - ID : " + filteredCustomer[0]?.cid);
      // console.log("filteredCustomer - Name : " + filteredCustomer[0]?.cname);
      // console.log("filteredCustomer - Contact : " + filteredCustomer[0]?.ccontact);

      this.customerData = filteredCustomer;
    });
  }
}
