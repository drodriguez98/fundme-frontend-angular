import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})

export class ProjectDeleteComponent implements OnInit {

  projectId: number;

  constructor(

    private projectsService: ProjectsService,
    public dialogRef: MatDialogRef<ProjectDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
    private router: Router

  ) { this.projectId = data.projectId; }

  ngOnInit() { }

  confirm(): void {

    this.projectsService.deleteProject(this.projectId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; }
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(['/myprojects']);

  }

}
