import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

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

  decodeAuthenticatedUserToken(): any | null {

    const authToken = localStorage.getItem('authToken');

    if (authToken) {

      try {

        const decodedToken: any = jwtDecode(authToken);
        return decodedToken;
        
      } catch (error) {

        console.error('Error al decodificar el token:', error);
        return null;

      }

    }

    return null;

  }

}