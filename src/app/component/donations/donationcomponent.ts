import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../service/donations.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})

export class DonationsComponent implements OnInit {
  donations: any = [];

  constructor(private donationsService: DonationsService) { }

  ngOnInit() {
    this.donationsService.getDonations().subscribe(data => {
      this.donations = data;
    });
  }

  displayedColumns: string[] = ['dateAdded', 'title', 'username', 'amount'];
}
