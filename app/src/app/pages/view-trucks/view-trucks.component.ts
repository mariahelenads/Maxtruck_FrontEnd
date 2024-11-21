import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../shared/template/template.module';
import { TrucksService } from '../../services/trucks.service';
import { tap } from 'rxjs';
import { Truck } from '../../models/truck.model';
import { ViewDetailTruckComponent } from './view-detail-truck/view-detail-truck.component';

@Component({
  selector: 'app-view-trucks',
  templateUrl: './view-trucks.component.html',
  imports : [TemplateModule, ViewDetailTruckComponent],
  standalone : true,
  styleUrls: ['./view-trucks.component.scss']
})
export class ViewTrucksComponent implements OnInit {
  data: Truck[] = [];
  openModalDetail: boolean = false

  constructor(public service : TrucksService) { }

  ngOnInit() {
    this.service.getViewTrucks()
    .pipe(tap(response=> this.data = [...response]))
    .subscribe()
  }
  
  viewDetail(detail : Truck){
      this.service.setTruckID = detail.id as  string
      this.openModalDetail = true
  }

}
