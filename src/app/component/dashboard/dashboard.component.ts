import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';
import { DonationsService } from '../../service/donations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  projects: any = [];
  donations: any = [];

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private donationsService: DonationsService

  ) { }

  ngOnInit() {

    this.projectsService.getTopProjects().subscribe(data => {
      this.projects = data;
    });

    this.donationsService.getTopDonations().subscribe(data => {
      this.donations = data;
    });

  }

  openProjectDetails(row: any) { this.router.navigate(['/project', row.projectId]); }
  openUserDetails(row: any) { this.router.navigate(['/users', row.userId]); }

  // displayedColumns: string[] = ['projectId', 'dateAdded', 'title', 'username', 'totalAmount'];

  displayedProjectsColumns: string[] = ['dateAdded', 'username', 'title', 'totalAmount'];
  displayedDonationsColumns: string[] = ['dateAdded', 'username', 'title', 'amount'];

}