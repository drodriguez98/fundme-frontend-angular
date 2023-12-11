import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    if (this.authService.isAuthenticated()) {
      // Si el usuario está autenticado, permite el acceso a la ruta protegida
      return true;
    } else {
      // Si el usuario no está autenticado, redirige al formulario de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
