import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientConsentsListingComponent } from './patient-consents-listing/patient-consents-listing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patient-consents-list',
    pathMatch: 'full'
  },
  {
    path: 'patient-consents-list',
    component: PatientConsentsListingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientConsentsRoutingModule { }
