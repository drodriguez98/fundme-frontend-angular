import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-active-user-detail',
  templateUrl: './active-user-detail.component.html',
  styleUrls: ['./active-user-detail.component.css']
})
export class ActiveUserDetailComponent implements OnInit {

  userDetails: any;

  constructor(private authService: AuthService, private userService: UsersService) { }

  ngOnInit(): void {
    // Verifica si el usuario está autenticado
    if (this.authService.isAuthenticated()) {
      // Obtén los detalles del usuario autenticado
      this.userDetails = this.authService.decodeAuthenticatedUserToken();
      
      // Realiza una solicitud para obtener más detalles del usuario desde la API (ejemplo)
      if (this.userDetails) {
        this.userService.getUser(this.userDetails.id).subscribe(
          (user: any) => {
            this.userDetails = user;
          },
          (error) => {
            console.error('Error al obtener detalles del usuario:', error);
          }
        );
      }
    } else {
      // Redirige al formulario de inicio de sesión si el usuario no está autenticado
      // Puedes implementar esta lógica según tus necesidades
    }
  }
}
