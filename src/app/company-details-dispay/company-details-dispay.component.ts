import { Component, OnInit } from '@angular/core';
import { CompanyDetailsModel } from '../models/company-information-model';

@Component({
  selector: 'company-details-dispay',
  templateUrl: './company-details-dispay.component.html',
  styleUrls: ['./company-details-dispay.component.css']
})
export class CompanyDetailsDispayComponent implements OnInit {


  company: CompanyDetailsModel = new CompanyDetailsModel(
   {
      customerUid: "cust2dsa12dsa", 
      company_name: "Pear",
      first_name: "John", 
      last_name: "Doe", 
      email: "email@email.com", 
      address: "123 Pine Lane"
    });
  constructor() { }

  ngOnInit() {
  }

}
