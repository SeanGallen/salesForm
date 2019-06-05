import { Component, OnInit } from '@angular/core';
import { CompanyDetailsModel } from '../models/company-information-model';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'company-details-dispay',
  templateUrl: './company-details-dispay.component.html',
  styleUrls: ['./company-details-dispay.component.css']
})
export class CompanyDetailsDispayComponent implements OnInit {


  company: CompanyDetailsModel = new CompanyDetailsModel(
   {
      uid: "cust2dsa12dsa", 
      company_name: "Pear",
      first_name: "John", 
      last_name: "Doe", 
      email: "email@email.com", 
      address: "123 Pine Lane"
    });
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private subscriber: any;

  ngOnInit() {
    this.subscriber = this.route.params.subscribe(params => {
	       
      this.http.get('/api/v1/company/' + params.uid).subscribe((data:any) => {

     this.company = new CompanyDetailsModel(data.company);
     });
   });
  }

}
