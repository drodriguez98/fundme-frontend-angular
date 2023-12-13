import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/model/Country';
import { User } from 'src/app/model/User';
import { CountriesService } from 'src/app/service/countries.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user: User = new User();
  country: Country = new Country();
  
  countries: any = [];

  constructor(

    private router: Router,
    private countriesService: CountriesService,
    private usersService: UsersService

  ) { }

  ngOnInit() {

    this.countriesService.getCountries().subscribe(data => { this.countries = data });

  }

  newUser() {

    // const currentDate = new Date();

    const newUser = {

      name: this.user.name,
      password: this.user.password,
      // dateAdded: currentDate,
      countryId: this.country,
      postalCode: this.user.postalCode,
      email: this.user.email,
      phone: this.user.phone,
      // active: true,
      // admin: false,
      username: this.user.username,

    }

    console.log(newUser);

    this.usersService.newUser(newUser);

    this.navigateToLogin();

  }

  cancelInsert() { this.navigateToLogin(); }

  navigateToLogin() { this.router.navigate(['/login']); }

}
