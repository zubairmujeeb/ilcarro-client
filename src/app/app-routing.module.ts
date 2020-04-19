import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { FindCarComponent } from './find-car/find-car.component';
import { FindCarResultComponent } from './find-car-result/find-car-result.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'search', component: FindCarComponent },
  { path: 'search-results', component: FindCarResultComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
