import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUser } from '../models/auth-user.model';
import { enviromnet } from '../enviroments/enviroment.prod';
import { User } from '../models/user.model';
import { distinct, Observable } from 'rxjs';
import { AuthTokenResponse } from '../models/auth-token-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  readonly url = enviromnet.API

  constructor(private http: HttpClient) {}

  authentiction(data :AuthUser) : Observable<AuthTokenResponse>{
    return this.http.post<AuthTokenResponse>(`${this.url}/users/auth`,data).pipe(distinct())
  }

  singUp(data : User): Observable<any>{
    return this.http.post(`${this.url}/users`,data)
  }
}