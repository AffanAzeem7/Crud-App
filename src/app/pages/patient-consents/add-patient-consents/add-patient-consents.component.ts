import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-patient-consents',
  templateUrl: './add-patient-consents.component.html',
  styleUrls: ['./add-patient-consents.component.css']
})
export class AddPatientConsentsComponent implements OnInit, OnChanges {
  validateForm!: FormGroup;
  isVisible = false;
  isConfirmLoading = false;
  @Input() addNewConsents:any
  @Input() EditConsents:any
  @Output() PatientConsents = new EventEmitter<any>();  
  @Output() newPatient = new EventEmitter<any>();  
  @Output() updatePatient = new EventEmitter<any>();  
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService
    ) 
    { }
  ngOnChanges(): void {
    if(this.addNewConsents) {
      this.showModal();
    }
    if(this.EditConsents) {
      this.showModal();
      this.validateForm.patchValue(this.EditConsents)
    }
  }
  ngOnInit(): void {
    this.hipaaForm()
  }
  hipaaForm() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
    })
  }

  showModal(): void {
    this.isVisible = true;
  } 
  handleCancel(): void {
    this.isVisible = false;
    this.PatientConsents.emit(false);
  }
  submit() {
    if(this.validateForm.valid && !this.EditConsents ) {
      this.handleCancel();
      this.newPatient.emit(this.validateForm.value);
      this.validateForm.reset();
      this.message.create('success', 'New Patient Consents Added Successfully!')
    }
    if(this.EditConsents && this.EditConsents.id > 0) {
     if(this.validateForm.valid) {
       this.handleCancel();
       this.EditConsents = {...this.EditConsents, ...this.validateForm.value}
       this.updatePatient.emit(this.EditConsents);
       this.validateForm.reset();
       this.EditConsents = [];
       this.message.create('success', 'Patient Consents Updated Successfully!')
     }
    }
  }
}
