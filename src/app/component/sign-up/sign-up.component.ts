import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      mobile_number_Email : [''],
      full_name : [''],
      user_name : [''],
      password: ['']
    })

  }

}
