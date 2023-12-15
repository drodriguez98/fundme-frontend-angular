import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Donation } from 'src/app/model/Donation';
import { DonationsService } from 'src/app/service/donations.service';
import { NotificationsService } from 'src/app/service/notifications.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { UsersService } from 'src/app/service/users.service';

@Component({

  selector: 'app-donation-new',
  templateUrl: './donation-new.component.html',
  styleUrls: ['./donation-new.component.css']

})

export class DonationNewComponent implements OnInit {

  donation: Donation = new Donation();
  project: any;
  userDetails: any;

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private authService: AuthService,
    private usersService: UsersService,
    private projectsService: ProjectsService,
    private donationService: DonationsService,
    private notificationsService: NotificationsService

  ) { }

  ngOnInit() {

    const projectId = +this.route.snapshot.params['id'];

    this.projectsService.getProject(projectId).subscribe(data => {

      this.project = data;

    });

    this.userDetails = this.authService.decodeAuthenticatedUserToken();

    if (this.userDetails) {

      this.usersService.getAuthenticatedUser(this.userDetails.userId).subscribe((user: any) => { this.userDetails = user; })

    }

  }

  newDonation() {

    const currentDate = new Date();

    const newDonation = {

      userId: this.userDetails,
      projectId: this.project,
      dateAdded: currentDate,
      amount: this.donation.amount

    }

    console.log(newDonation);

    this.donationService.newDonation(newDonation);

    this.newNotification();

    this.navigateToProjectDetails();

  }

  newNotification() {

    const currentDate = new Date();

    const newNotification = {

      recipient: this.userDetails,
      message: `${this.userDetails.username} ha donado ${this.donation.amount} € a tu proyecto '${this.project.title}'`,
      createdDate: currentDate,
      read: false,
      relatedUser: this.project.userId,
      relatedProject: this.project

    }

    console.log(newNotification);

    this.notificationsService.newNotification(newNotification);

  }

  cancelInsert() { this.navigateToProjectDetails(); }

  navigateToProjectDetails() { this.router.navigate(['/project', this.route.snapshot.params['id']]) }

}
