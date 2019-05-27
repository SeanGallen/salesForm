import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesAccountInputFieldComponent } from './sales-account-input-field/sales-account-input-field.component';
import { CompanyDetailsDispayComponent } from './company-details-dispay/company-details-dispay.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesAccountInputFieldComponent,
    CompanyDetailsDispayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
