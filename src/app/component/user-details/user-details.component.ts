import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  user: any;

  constructor(

    private usersService: UsersService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    const userId = +this.route.snapshot.params['id'];
    console.log('User ID from URL:', userId); // Agrega un log descriptivo para el ID del usuario desde la URL

    this.usersService.getUser(userId).subscribe(
      (data) => {
        console.log('DATA:', data); // Agrega un log descriptivo para la respuesta de los detalles del usuario
        this.user = data;
        console.log('USER:', this.user)
      },
      (error) => {
        console.error('Error fetching user details:', error); // Agrega un log descriptivo para cualquier error al obtener los detalles del usuario
      }
    );
  }


}
