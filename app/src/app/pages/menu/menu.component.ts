import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TemplateModule } from '../../shared/template/template.module';
import { RouterEnum } from '../../app.routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports : [TemplateModule],
  standalone : true,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() change = new EventEmitter()
  items : {label: string,icon:string, page: RouterEnum}[] = [];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Cadastrar caminhões',
          icon: 'pi pi-truck',
          page : RouterEnum.TRUCKS
      },     
      {
        label: 'Visualizar caminhões',
        icon: 'pi pi-eye',
        page : RouterEnum.VIEWTRUCKS
      },
      {
          label: 'Calcular rota',
          icon: 'pi pi-calculator',
          page : RouterEnum.CALCULATEROUTE
      },
  ];
  }
  go(page:string){
    this.change.emit(page)
  }

}
