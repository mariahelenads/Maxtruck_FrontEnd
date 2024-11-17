import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../shared/template/template.module';
import { TrucksService } from '../../services/trucks.service';
import { tap } from 'rxjs';
import { Truck } from '../../models/truck.model';

@Component({
  selector: 'app-view-trucks',
  templateUrl: './view-trucks.component.html',
  imports : [TemplateModule],
  standalone : true,
  styleUrls: ['./view-trucks.component.scss']
})
export class ViewTrucksComponent implements OnInit {
  data: Truck[] = [];

  constructor(public service : TrucksService) { }

  ngOnInit() {
    this.service.getViewTrucks()
    .pipe(tap(response=> this.data = [...response]))
    .subscribe()
  }

}
