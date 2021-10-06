import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientConsentsRoutingModule } from './patient-consents-routing.module';
import { PatientConsentsListingComponent } from './patient-consents-listing/patient-consents-listing.component';
import { PatientConsentsTableComponent } from './patient-consents-table/patient-consents-table.component';
import { AddPatientConsentsComponent } from './add-patient-consents/add-patient-consents.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [PatientConsentsListingComponent, PatientConsentsTableComponent, AddPatientConsentsComponent],
  imports: [
    CommonModule,
    PatientConsentsRoutingModule,
    ReactiveFormsModule,
    NzTableModule,
    NzGridModule,
    NzDividerModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzMessageModule
  ]
})
export class PatientConsentsModule { }
