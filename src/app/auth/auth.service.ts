import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isAuthenticated(): boolean {
    // Verifica si existe un token en el localStorage
    const authToken = localStorage.getItem('authToken');
    return !!authToken; // Retorna true si hay un token, de lo contrario false
  }
}
