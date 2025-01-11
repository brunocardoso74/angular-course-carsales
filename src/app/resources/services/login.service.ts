import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
//HttpInterceptor

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/login'; // Altere para a URL correta da sua API

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }
  
  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>(
      this.apiUrl, 
      requestLogin 
    ).pipe(
      tap( ( loginResponse ) => ( this.authService.setLoginResponse( loginResponse ) ) )
    )
  }
}
