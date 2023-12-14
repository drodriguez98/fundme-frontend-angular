import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from 'src/app/service/countries.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class EditUserDetailsComponent implements OnInit {

  user: any;
  countries: any;

  constructor(

    private usersService: UsersService,
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe

  ) { }

  ngOnInit() {

    this.usersService.getUser(this.route.snapshot.params['id']).subscribe(data => {

      this.user = data;
      this.formatDate();

    });

    this.countriesService.getCountries().subscribe(data => { this.countries = data });

  }

  formatDate() {

    const date = new Date(this.user.date_added);
    this.user.date_added = this.datePipe.transform(date, 'yyyy-MM-dd');

  }

  editUser(): void {

    this.usersService.editUser(this.user);
    this.navigateToDetail();

  }

  cancelEdit() { this.navigateToDetail(); }

  navigateToDetail() { this.router.navigate(['/profile']) };

}