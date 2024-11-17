import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { Truck } from './models/truck.model';
import { TrucksComponent } from './pages/trucks/trucks.component';
export enum RouterEnum {
    SIGUP = 'singup',
    TRUCKS = 'trucks'
}
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: RouterEnum.SIGUP,
    component: SignUpComponent,
  },
  {
    path: RouterEnum.TRUCKS,
    component: TrucksComponent,
  },
];
