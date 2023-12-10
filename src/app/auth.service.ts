import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'
  
})

export class AuthService {

  private apiUrl = 'http://localhost:30030/login'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> { return this.http.post<any>(`${this.apiUrl}/login`, credentials); }

}
