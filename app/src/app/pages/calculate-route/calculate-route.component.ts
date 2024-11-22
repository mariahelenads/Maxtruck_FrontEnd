import { Component, inject, OnInit } from '@angular/core';
import { TemplateModule } from '../../shared/template/template.module';
import { MapperComponent } from './mapper/mapper.component';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { TrucksService } from '../../services/trucks.service';
import { Truck } from '../../models/truck.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParamMapper } from './mapper/mapper.model';

@Component({
  selector: 'app-calculate-route',
  templateUrl: './calculate-route.component.html',
  standalone: true,
  imports: [TemplateModule, MapperComponent],
  styleUrls: ['./calculate-route.component.scss'],
})
export class CalculateRouteComponent implements OnInit {
  emitRoute = new Subject<ParamMapper>();
  visible = true;
  truckService = inject(TrucksService);
  selectTruck: Truck = new Truck
  trucksList: Truck[] = [];
  formGroup = new FormGroup({
    startRoute : new FormControl("",Validators.required),
    endRoute : new FormControl("",Validators.required)
  })
  
  constructor() {}

  ngOnInit() {
    this.truckService
      .getTruckUserDetails()
      .subscribe((trucks) => this.trucksList = trucks);
  }
  getList(){
    return this.trucksList
  }

  change(){
    console.log(this.selectTruck)
    this.emitRoute.next({
     originAddress: this.control('startRoute').value,
     destinationAddress:  this.control('endRoute').value,
     height: this.selectTruck.height,
     grossWeight: this.selectTruck.width,
    })
  }
  control(name:string){
    return this.formGroup.get(name) as FormControl
  }
}
