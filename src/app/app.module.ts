import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesAccountInputFieldComponent } from './component/sales-account-input-field/sales-account-input-field.component';
import { CompanyDetailsDispayComponent } from './component/company-details-dispay/company-details-dispay.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SalesAccountInputFieldComponent,
    CompanyDetailsDispayComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
