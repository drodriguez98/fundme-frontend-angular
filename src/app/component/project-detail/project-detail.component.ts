import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../service/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({

  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']

})

export class ProjectDetailComponent implements OnInit {

  project: any;
  donations: any[] = [];
  comments: any[] = [];

  constructor(

    private projectsService: ProjectsService, 
    private route: ActivatedRoute, 
    private router: Router,
    public dialog: MatDialog
  
  ) {}

  ngOnInit() {
    const projectId = +this.route.snapshot.params['id'];
    this.projectsService.getProject(projectId).subscribe(data => {
      this.project = data;
      this.loadDonations(projectId);
      this.loadComments(projectId);
    });
  }

  loadDonations(projectId: number) {
    this.projectsService.getDonationsByProjectId(projectId).subscribe(donations => {
      this.donations = donations;
    });
  }

  loadComments(projectId: number) {
    this.projectsService.getCommentsByProjectId(projectId).subscribe(comments => {
      this.comments = comments;
    });
  }

}