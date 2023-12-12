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

    // Obtener los detalles del usuario autenticado

    if (this.authService.isAuthenticated()) {
      
      this.userDetails = this.authService.decodeAuthenticatedUserToken();
      
      if (this.userDetails) {

        this.userService.getUser(this.userDetails.id).subscribe(

          (user: any) => {

            this.userDetails = user;

          },

          (error) => { console.error('Error al obtener detalles del usuario:', error); }

        );
      }
    } else {

      // Redirigir al formulario de inicio de sesión si el usuario no está autenticado

    }

  }

}