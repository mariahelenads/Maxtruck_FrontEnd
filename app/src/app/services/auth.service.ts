import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUser } from '../models/auth-user.model';
import { enviromnet } from '../enviroments/enviroment.prod';
import { User } from '../models/user.model';
import { BehaviorSubject, distinct, Observable, Subject, tap } from 'rxjs';
import { AuthTokenResponse } from '../models/auth-token-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly url = `${enviromnet.API}/users`;
  private user_info = new BehaviorSubject<AuthTokenResponse>(new AuthTokenResponse);

  constructor(private http: HttpClient) {}

  getDataUser(){
    return this.user_info.asObservable()
  }

  getUserId(){
    return sessionStorage.getItem('userId') as string
  }

  isLoggedIn(){
    return Boolean(sessionStorage.getItem('userId'))
  }

  authentication(data: AuthUser): Observable<AuthTokenResponse> {
    return this.http.post<AuthTokenResponse>(`${this.url}/auth`, data).pipe(
      tap((response) => {
        this.user_info.next(response)
        sessionStorage.setItem('userId',response.userId)
        sessionStorage.setItem('name',response.name)
        sessionStorage.setItem('token',response.token)
      })
    )
  }

  singUp(data: User): Observable<any> {
    return this.http.post(`${this.url}`, data);
  }
}
