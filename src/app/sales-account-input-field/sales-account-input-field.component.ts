import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sales-account-input-field',
  templateUrl: './sales-account-input-field.component.html',
  styleUrls: ['./sales-account-input-field.component.css']
})
export class SalesAccountInputFieldComponent implements OnInit {

   registered = false;
   submitted = false;
   userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  

  invalidFirstName() {
     return (this.submitted && this.userForm.controls.first_name.errors != null);
  }
  invalidLastName() {
     return (this.submitted && this.userForm.controls.last_name.errors != null);
  }
  invalidCompanyName() {
     return (this.submitted && this.userForm.controls.company_name.errors != null);
  }
  invalidEmail() {
     return (this.submitted && this.userForm.controls.email.errors != null);
  }
  invalidAddress() {
     return (this.submitted && this.userForm.controls.address.errors != null);
  }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
         first_name: ['', Validators.required],
         last_name: ['', Validators.required],
         company_name: ['', Validators.required],
         email: ['', Validators.required, Validators.email],
         address: ['', Validators.required]
    });
  }
  onSubmit()
  {
    this.submitted = true;
 
    if(this.userForm.invalid == true){
      return;
    }
    else{
      this.registered = true;
    }
  }
  

}
