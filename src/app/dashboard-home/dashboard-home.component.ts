import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { DonationsService } from '../donations.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})

export class DashboardHomeComponent implements OnInit {

  projects: any = [];
  donations: any = [];

  constructor(private projectsService: ProjectsService, private donationsService: DonationsService) {}

  ngOnInit() {

    this.projectsService.getTopProjects().subscribe(data => {
      this.projects = data;
    });

    this.donationsService.getTopDonations().subscribe(data => {
      this.donations = data;
    });

  }

}