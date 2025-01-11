import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse: ResponseLogin | undefined;

  constructor() { }

  public clear(): void {
    this.loginResponse = undefined;
  }

  public setLoginResponse(response: ResponseLogin): void {
    this.loginResponse = response;
  }

  public isAuthenticate(): boolean {
    return Boolean(this.loginResponse?.jwt);
  }

  public getToken(): string {
    const token = this.loginResponse?.jwt || '';
    if (!token || this.isTokenExpired(token)) {
      return '';
    }
    return token;
  }

  private isTokenExpired(token: string): boolean {
    // Implementar a lógica para verificar se o token está expirado
    // Isso geralmente envolve decodificar o token e verificar a data de expiração
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp;
    const now = Math.floor(new Date().getTime() / 1000);
    return now >= expiry;
  }
}
