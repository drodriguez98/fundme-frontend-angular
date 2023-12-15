import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../service/donations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})

export class DonationsComponent implements OnInit {
  donations: any = [];

  constructor(

    private donationsService: DonationsService,
    private router: Router

  ) { }

  ngOnInit() {

    this.donationsService.getDonations().subscribe(data => {

      this.donations = data;

    });
  }

  openProjectDetails(row: any) { this.router.navigate(['/project', row.projectId]); }
  openUserDetails(row: any) { this.router.navigate(['/users', row.userId]); }

  displayedColumns: string[] = ['dateAdded', 'username', 'title', 'amount'];

}