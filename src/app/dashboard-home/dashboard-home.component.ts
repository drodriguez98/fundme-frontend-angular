import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private projectsService: ProjectsService, private donationsService: DonationsService) {}

  ngOnInit() {

    this.projectsService.getTopProjects().subscribe(data => {
      this.projects = data;
    });

    this.donationsService.getTopDonations().subscribe(data => {
      this.donations = data;
    });

  }

  openDetailProjectsForm(row:any) { this.router.navigate(['/project', row.projectId]); }

  // displayedColumns: string[] = ['projectId', 'dateAdded', 'title', 'username', 'totalAmount'];

  displayedProjectsColumns: string[] = ['dateAdded', 'title', 'username', 'totalAmount'];
  displayedDonationsColumns: string[] = ['dateAdded', 'title', 'username', 'amount' ];

}