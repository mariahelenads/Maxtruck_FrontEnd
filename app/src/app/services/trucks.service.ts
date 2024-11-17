import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviromnet } from '../enviroments/enviroment.prod';
import { Truck } from '../models/truck.model';
import { Observable } from 'rxjs';
import { TruckDetails } from '../models/truck-details.model';

@Injectable({
  providedIn: 'root',
})
export class TrucksService {
  readonly url = `${enviromnet.API}/trucks`;

  constructor(private http: HttpClient) {}

  getViewTrucks(): Observable<Truck[]> {
    return this.http.get<Truck[]>(`${this.url}`);
  }

  getTruckDetails(truckId: string): Observable<TruckDetails> {
    return this.http.get<TruckDetails>(`${this.url}/${truckId}/details`);
  }

  createTruck(input: Truck): Observable<any> {
    return this.http.post(this.url, input);
  }
}
