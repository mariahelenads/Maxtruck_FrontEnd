import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { Truck } from './models/truck.model';
import { TrucksComponent } from './pages/trucks/trucks.component';
import { PainelComponent } from './pages/painel/painel.component';
import { ViewTrucksComponent } from './pages/view-trucks/view-trucks.component';
export enum RouterEnum {
    SIGUP = 'singup',
    TRUCKS = 'trucks',
    PAINEL = 'painel',
    VIEWTRUCKS = 'viewtrucks',
}
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: RouterEnum.PAINEL,
    component: PainelComponent,
  },
  {
    path: RouterEnum.SIGUP,
    component: SignUpComponent,
  },
  {
    path: RouterEnum.TRUCKS,
    component: TrucksComponent,
  },
  {
    path: RouterEnum.VIEWTRUCKS,
    component: ViewTrucksComponent,
  },
];
