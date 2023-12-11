import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../service/donations.service';

@Component({
  selector: 'app-donation-home',
  templateUrl: './donation-home.component.html',
  styleUrls: ['./donation-home.component.css']
})

export class DonationHomeComponent implements OnInit {
  donations: any = [];

  constructor(private donationsService: DonationsService) {}

  ngOnInit() {
    this.donationsService.getDonations().subscribe(data => {
      this.donations = data;
    });
  }

  displayedColumns: string[] = ['dateAdded', 'title', 'username', 'amount' ];
}
