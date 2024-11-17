import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviromnet } from '../enviroments/enviroment.prod';
import { Truck } from '../models/truck.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrucksService {
  readonly url = `${enviromnet.API}/trucks`

  constructor(private http: HttpClient) {}


  getViewTrucks() :Observable<Truck[]> {
    return this.http.get<Truck[]>(`${this.url}`)
  }

  createTruck(input:Truck) : Observable<any>{
    return this.http.post(this.url, input);
  }
}
