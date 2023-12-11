import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      // Concatenar "Bearer" al token antes de asignarlo al encabezado Authorization
      const authHeaderValue = `Bearer ${authToken}`;
      request = request.clone({
        setHeaders: {
          Authorization: authHeaderValue
        }
      });
    }

    return next.handle(request);
  }
}