import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../shared/template/template.module';
import { MenuComponent } from '../menu/menu.component';
import { RouterEnum } from '../../app.routes';
import { TrucksComponent } from '../trucks/trucks.component';
import { ViewTrucksComponent } from '../view-trucks/view-trucks.component';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  imports : [TemplateModule,MenuComponent,TrucksComponent,ViewTrucksComponent],
  standalone : true,
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  page: any;
  route = RouterEnum
  constructor() { }

  ngOnInit() {
   
  }

  navigate(page: any){
    this.page = page
  }
}
