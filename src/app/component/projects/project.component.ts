import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectsComponent implements OnInit {

  projects: any = [];

  constructor(private projectsService: ProjectsService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  openProjectDetails(row: any) { this.router.navigate(['/project', row.projectId]); }

  openUserDetails(row: any) { this.router.navigate(['/user', row.userId]); }

  displayedColumns: string[] = ['dateAdded', 'title', 'username', 'totalAmount'];

}