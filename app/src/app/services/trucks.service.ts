import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviromnet } from '../enviroments/enviroment.prod';
import { Truck } from '../models/truck.model';
import { Observable, of } from 'rxjs';
import { TruckDetails } from '../models/truck-details.model';

@Injectable({
  providedIn: 'root',
})
export class TrucksService {
  readonly url = `${enviromnet.API}/trucks`;
  private truckID : string = ""

  constructor(private http: HttpClient) {}

  set setTruckID(id : string){
    this.truckID = id
  }

  get getTruckId(){
    return this.truckID
  }

  getViewTrucks(): Observable<Truck[]> {
    return this.http.get<Truck[]>(`${this.url}`);
  }

  getTruckDetails(): Observable<TruckDetails> {
    return this.http.get<TruckDetails>(`${this.url}/${this.truckID}/details`);
  }

  createTruck(input: Truck): Observable<any> {
    return this.http.post(this.url, input);
  }
}
