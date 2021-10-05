import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-patient-consents-table',
  templateUrl: './patient-consents-table.component.html',
  styleUrls: ['./patient-consents-table.component.css']
})
 
export class PatientConsentsTableComponent implements OnInit, OnChanges {
  @Input() data: any;
  size: NzButtonSize = 'large';
  constructor() { }
  ngOnChanges(): void {
    if(this.data) {
      console.log('ada', this.data);
    }
  }

  ngOnInit(): void {
  }

}
