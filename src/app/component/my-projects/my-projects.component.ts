import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UsersService } from 'src/app/service/users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ProjectDeleteComponent } from '../project-delete/project-delete.component';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})

export class MyProjectsComponent implements OnInit {

  projects: any = [];

  userDetails: any;

  constructor(

    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog

  ) { }

  ngOnInit() {

    this.userDetails = this.authService.decodeAuthenticatedUserToken();

    if (this.userDetails) {

      this.usersService.getUser(this.userDetails.userId).subscribe(

        (user: any) => {

          this.userDetails = user;
          this.loadMyProjects(this.userDetails.userId);

        })

    }

  }

  loadMyProjects(userId: number) {

    this.usersService.getProjectsByUserId(userId).subscribe(projects => {

      this.projects = projects;

    });

  }

  openProjectDetails(row: any) { this.router.navigate(['/project', row.projectId]); }

  editProject(project: any) { this.router.navigate(['/project/edit', project]); }

  openDeleteDialog(projectId: number): void { this.dialog.open(ProjectDeleteComponent, { data: { projectId: projectId } }); }

  displayedColumns: string[] = ['dateAdded', 'title', 'totalAmount', 'actions'];

}