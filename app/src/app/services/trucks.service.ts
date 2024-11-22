import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviromnet } from '../enviroments/enviroment.prod';
import { Truck } from '../models/truck.model';
import { Observable, of } from 'rxjs';
import { TruckDetails } from '../models/truck-details.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TrucksService {
  readonly url = `${enviromnet.API}/trucks`;
  private truckID: string = '';
  private auth = inject(AuthService);
  constructor(private http: HttpClient) {}

  set setTruckID(id: string) {
    this.truckID = id;
  }

  get getTruckId() {
    return this.truckID;
  }

  getViewTrucks(): Observable<Truck[]> {
    return this.http.get<Truck[]>(`${this.url}`);
  }

  getTruckDetails(): Observable<TruckDetails> {
    return this.http.get<TruckDetails>(`${this.url}/${this.truckID}/details`);
  }

  getUserTrucks(): Observable<Truck[]> {
    return this.http.get<Truck[]>(`${this.url}/user`, {
      params: { userId : this.auth.getUserId()},
    });
  }

  createTruck(input: Truck): Observable<any> {
    input.userId = this.auth.getUserId();
    return this.http.post(this.url, input);
  }
}
