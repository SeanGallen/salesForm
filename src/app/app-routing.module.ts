import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesAccountInputFieldComponent } from './component/sales-account-input-field/sales-account-input-field.component';
import { CompanyDetailsDispayComponent } from './component/company-details-dispay/company-details-dispay.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sales',
    component: SalesAccountInputFieldComponent
  },
  {
    path: 'company/:uid',
    component: CompanyDetailsDispayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
