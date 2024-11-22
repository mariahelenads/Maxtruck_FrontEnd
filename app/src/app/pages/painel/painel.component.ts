import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../shared/template/template.module';
import { MenuComponent } from '../menu/menu.component';
import { RouterEnum } from '../../app.routes';
import { TrucksComponent } from '../trucks/trucks.component';
import { ViewTrucksComponent } from '../view-trucks/view-trucks.component';
import { ViewDetailTruckComponent } from '../view-trucks/view-detail-truck/view-detail-truck.component';
import { CalculateRouteComponent } from '../calculate-route/calculate-route.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  imports: [
    TemplateModule,
    MenuComponent,
    TrucksComponent,
    ViewTrucksComponent,
    CalculateRouteComponent,
    HeaderComponent
  ],
  standalone: true,
  styleUrls: ['./painel.component.scss'],
})
export class PainelComponent implements OnInit {
  page: any;
  route = RouterEnum;
  constructor() {}

  ngOnInit() {}

  navigate(page: any) {
    console.log('Navegando para:', page);
    this.page = page;
  }
}
