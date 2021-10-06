import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-patient-consents-table',
  templateUrl: './patient-consents-table.component.html',
  styleUrls: ['./patient-consents-table.component.css']
})
 
export class PatientConsentsTableComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() dataChanges = new EventEmitter<any>();  
  confirmModal?: NzModalRef
  isPatientConsents:boolean = false;
  editPatientConsents:any;
  size: NzButtonSize = 'small';
  constructor(
    private modal: NzModalService,
    private message: NzMessageService
  ) { }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }
  addHppa(value:boolean) {
    if(value) {
      this.isPatientConsents = value;
    } else {
      this.isPatientConsents = value
    }
  }
  addNewPatient(data:any) {
    this.data.push(data);
    this.dataChanges.emit(this.data);
  }
  updatePatient(data:any) {
    for(let i = 0; i<this.data.length; i++) 
    {
      if(this.data[i].id == data.id) {
        this.data[i] = data; 
        this.dataChanges.emit(this.data);
        break;
      }
    }
  }
  delete(i:any) {
    this.showConfirm(i);
  }
  Edit(data:any) {
    this.editPatientConsents = data;
  }
  showConfirm(index:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(resolve ,1000);
        }).then((res:any)=> {
          this.data.splice(index, 1);
          this.dataChanges.emit(this.data);
        })
        .catch(() => console.log('Oops errors!'))
    });
  }
}
