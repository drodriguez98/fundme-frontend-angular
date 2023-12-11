import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})

export class ProjectHomeComponent implements OnInit {

  projects: any = [];

  constructor(private projectsService: ProjectsService, private router: Router, public dialog: MatDialog ) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  openDetailForm(row:any) { this.router.navigate(['/project', row.projectId]); }

  displayedColumns: string[] = ['dateAdded', 'title', 'username', 'totalAmount'];

}