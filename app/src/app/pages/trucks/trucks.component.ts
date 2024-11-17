import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  form = new FormGroup({
    model: new FormControl('',Validators.required), //Modelo do caminhão
    brand : new FormControl('',Validators.required), // Marca do caminhão
    length : new FormControl('',Validators.required), // Comprimento do caminhão (em metros)
    width : new FormControl('',Validators.required), // Largura do caminhão (em metros)
    height : new FormControl('',Validators.required), // Altura do caminhão (em metros)
    license_plate : new FormControl('',Validators.required), // Placa do caminhão
    load_capacity : new FormControl('',Validators.required), // Capacidade de carga (em toneladas)
    additional_info : new FormControl(''), // Informações adicionais em formato JSON
  });
  constructor() {}

  ngOnInit() {}

  control(name:string){
    return this.form.get(name) as FormControl
  }
}
