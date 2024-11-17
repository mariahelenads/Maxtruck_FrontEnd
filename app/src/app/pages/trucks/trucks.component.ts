import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TemplateModule } from '../../shared/template/template.module';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  imports : [TemplateModule],
  standalone : true,
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {
  form = new FormGroup({
    model: new FormControl('',[Validators.required,Validators.minLength(2)]), //Modelo do caminhão
    brand : new FormControl('',[Validators.required,Validators.minLength(2)]), // Marca do caminhão
    length : new FormControl('',[Validators.required,Validators.minLength(2)]), // Comprimento do caminhão (em metros)
    width : new FormControl('',[Validators.required,Validators.minLength(2)]), // Largura do caminhão (em metros)
    height : new FormControl('',[Validators.required,Validators.minLength(2)]), // Altura do caminhão (em metros)
    license_plate : new FormControl('',[Validators.required,Validators.minLength(2)]), // Placa do caminhão
    load_capacity : new FormControl('',[Validators.required,Validators.minLength(2)]), // Capacidade de carga (em toneladas)
    additional_info : new FormControl(''), // Informações adicionais em formato JSON
  });
  constructor() {}

  ngOnInit() {}

  control(name:string){
    return this.form.get(name) as FormControl
  }
}
