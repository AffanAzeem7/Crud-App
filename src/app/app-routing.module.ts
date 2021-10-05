import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {
    path: "app",
    loadChildren: () =>
        import("./pages/patient-consents/patient-consents.module").then((m) => m.PatientConsentsModule),
},
{ path: '**', redirectTo: 'app' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
