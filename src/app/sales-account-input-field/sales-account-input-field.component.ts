import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'sales-account-input-field',
  templateUrl: './sales-account-input-field.component.html',
  styleUrls: ['./sales-account-input-field.component.css']
})
export class SalesAccountInputFieldComponent implements OnInit {

   registered = false;
   submitted = false;
   userForm: FormGroup;
   guid: string;
   serviceErrors:any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.http.get('/api/v1/generate_uid').subscribe( (data:any) => {
      this.guid = data.guid;
    }, error => {
      console.log("There was an error in obtain the guid from the server: ", error);
    });
   }
  

  invalidFirstName() {
     return (this.submitted && (this.serviceErrors.first_name !== null || this.userForm.controls.first_name.errors != null));
  }
  invalidLastName() {
     return (this.submitted && (this.serviceErrors.last_name !== null || this.userForm.controls.last_name.errors != null));
  }
  invalidCompanyName() {
     return (this.submitted && (this.serviceErrors.company_name !== null || this.userForm.controls.company_name.errors != null));
  }
  invalidEmail() {
     return (this.submitted && (this.serviceErrors.email !== null || this.userForm.controls.email.errors != null));
  }
  invalidAddress() {
     return (this.submitted && (this.serviceErrors.address !== null || this.userForm.controls.address.errors != null));
  }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
        first_name: ['', [Validators.required, Validators.maxLength(50)]],
  		  last_name: ['', [Validators.required, Validators.maxLength(50)]],
  		 // email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
        company_name: ['', [Validators.required, Validators.maxLength(50)]],
        address: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
  
  onSubmit()
  {
    this.submitted = true;
    
    if(this.userForm.invalid == true){
      return;
    }
    else
    {
      let data: any = Object.assign({guid: this.guid}, this.userForm.value);
      console.log("out ", data);
      this.http.post('api/v1/company', data).subscribe((data:any) => {
        console.log("sdf: ", data);
        let path = '/company/' + data.company.uid;
        this.router.navigate([path]);
      }, error => 
    {
        this.serviceErrors = error.error.error;
    });
      this.registered = true;
    }
  }
  

}
