import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../shared/template/template.module';
import { MapperComponent } from './mapper/mapper.component';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-calculate-route',
  templateUrl: './calculate-route.component.html',
  standalone : true,
  imports : [TemplateModule,MapperComponent],
  styleUrls: ['./calculate-route.component.scss']
})
export class CalculateRouteComponent implements OnInit {
  emitRoute = new Subject()
  visible = true
  constructor() { }

  ngOnInit() {

  }


}
