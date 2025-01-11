import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:8080/api/auth/customers'; // Altere para a URL correta da sua API

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

 public getCustomerList(): Observable<Customer[]> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authService.getToken()}`
  });

  return this.httpClient.get<Customer[]>(this.apiUrl, { headers });
 }

 public getCustomerById(id: number): Observable<Customer> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    
    return this.httpClient.get<Customer>(`${this.apiUrl}/${id}`, { headers });
  }

  public updateCustomer(customer: Customer): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.httpClient.put<void>(`${this.apiUrl}/${customer.id}`, customer, { headers });
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.httpClient.post<Customer>(this.apiUrl, customer, { headers });
  }
}
