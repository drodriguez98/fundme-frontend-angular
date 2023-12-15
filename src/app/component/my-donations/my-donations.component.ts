import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DonationsService } from '../../service/donations.service';
import { UsersService } from 'src/app/service/users.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({

  selector: 'app-my-donations',
  templateUrl: './my-donations.component.html',
  styleUrls: ['./my-donations.component.css']

})

export class MyDonationsComponent implements OnInit {

  donations: any = [];

  userDetails: any;

  constructor(

    private usersService: UsersService,
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router

  ) { }

  ngOnInit() {

    this.userDetails = this.authService.decodeAuthenticatedUserToken();

    if (this.userDetails) {

      this.usersService.getAuthenticatedUser(this.userDetails.userId).subscribe(

        (user: any) => {

          this.userDetails = user;
          this.loadMyDonations(this.userDetails.userId);

        })

    }

  }

  loadMyDonations(userId: number) {

    this.usersService.getDonationsByUserId(userId).subscribe(donations => {

      this.donations = donations;

    });

  }

  openProjectDetails(row: any) { this.router.navigate(['/project', row.projectId]); }
  openUserDetails(row: any) { this.router.navigate(['/user', row.userId]); }

  displayedColumns: string[] = ['dateAdded', 'title', 'amount'];

}
