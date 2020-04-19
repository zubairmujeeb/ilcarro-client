import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { FindCarComponent } from './find-car/find-car.component';
import { FindCarResultComponent } from './find-car-result/find-car-result.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'search', component: FindCarComponent },
  { path: 'search-results', component: FindCarResultComponent },
  { path: '', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
