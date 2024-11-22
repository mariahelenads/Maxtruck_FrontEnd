import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TemplateModule } from '../../shared/template/template.module';
import { HeaderComponent } from '../header/header.component';
import { TrucksService } from '../../services/trucks.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { RouterEnum } from '../../app.routes';
import { Truck } from '../../models/truck.model';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss'],
  imports: [TemplateModule],
  standalone: true,
  providers: [TrucksService, MessageService],
})
export class TrucksComponent implements OnInit {
  @Output() viewTrucks = new EventEmitter();

  form = new FormGroup({
    model: new FormControl('', [Validators.required, Validators.minLength(2)]), //Modelo do caminhão
    brand: new FormControl('', [Validators.required, Validators.minLength(2)]), // Marca do caminhão
    length: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0.1),
    ]), // Comprimento do caminhão (em metros)
    weight: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0.1),
    ]), // Largura do caminhão (em metros)
    height: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0.1),
    ]), // Altura do caminhão (em metros)
    licensePlate: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]), // Placa do caminhão
    loadCapacity: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0.1),
    ]), // Capacidade de carga (em toneladas)
    description: new FormControl(''), // Informações adicionais em formato JSON
  });
  constructor(
    private route: Router,
    private service: TrucksService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  control(name: string) {
    return this.form.get(name) as FormControl;
  }

  navigatgeSigUp() {
    this.route.navigate([RouterEnum.PAINEL]);
  }

  createTruck() {
    if (this.form.invalid) return;
    const input: Truck = this.form.getRawValue() as Truck;
    input.active = true;
    this.service
      .createTruck(input)
      .pipe(
        tap(() => this.renderViewTrucks()),
        catchError((error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Falha ao cadastrar caminhão',
            detail: 'internal server error',
          });
          return error;
        })
      )
      .subscribe();
  }

  renderViewTrucks() {
    console.log('Renderizando componente viewTrucks');
    this.viewTrucks.emit(RouterEnum.VIEWTRUCKS);
  }
}
