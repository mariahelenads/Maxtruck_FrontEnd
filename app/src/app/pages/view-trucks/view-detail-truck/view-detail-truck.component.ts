import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TemplateModule } from '../../../shared/template/template.module';
import { TrucksService } from '../../../services/trucks.service';
import { TruckDetails } from '../../../models/truck-details.model';
import { tap } from 'rxjs';
import { LabelItemComponent } from '../../../shared/label-item/label-item.component';

@Component({
  selector: 'app-view-detail-truck',
  templateUrl: './view-detail-truck.component.html',
  imports : [TemplateModule],
  standalone : true,
  styleUrls: ['./view-detail-truck.component.scss']
})
export class ViewDetailTruckComponent implements OnInit {
  @Output() close = new EventEmitter
  visible: boolean = true;
  data = new TruckDetails
  constructor(public service : TrucksService) { }

  ngOnInit() {
    this.service.getTruckDetails().pipe(
      tap(response=> this.data = response)
    ).subscribe()
  }

}
