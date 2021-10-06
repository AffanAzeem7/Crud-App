import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { PatientConsentsTableComponent } from '../patient-consents-table/patient-consents-table.component';
import { PatientConsentsService } from '../patient-consents.service';

@Component({
  selector: 'app-patient-consents-listing',
  templateUrl: './patient-consents-listing.component.html',
  styleUrls: ['./patient-consents-listing.component.css']
})
export class PatientConsentsListingComponent implements OnInit {
  @ViewChild("renderingContainer", { read: ViewContainerRef })
   container!: ViewContainerRef;
   private componentRef!: ComponentRef<any>;

  public dataSource :any
  constructor(
    private readonly _resolver: ComponentFactoryResolver,
    private readonly _PatientConstanstsService: PatientConsentsService,
    ) { }

  ngOnInit(): void {
    this.getUsersData();
  }
  getUsersData() {
    this._PatientConstanstsService.getData().subscribe((res:any)=> {
      if(res && res.length > 0) {
        this.dataSource = res;
        this.renderingComponent(PatientConsentsTableComponent, this.dataSource)
      }
    }); 
  }
  renderingComponent(type:any, data: any) {
    const factory: ComponentFactory<any> = this._resolver.resolveComponentFactory(
        type
    );
    this.container.clear();
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.data = data;
    this.componentRef.instance.dataChanges.subscribe((res:any) => {
    this.renderingComponent(PatientConsentsTableComponent, res);
    })
}
}
