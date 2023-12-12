import { Component, OnInit } from '@angular/core';
import { Project } from '../model/Project';
import { Router } from '@angular/router';
import { Area } from '../model/Area';
import { ProjectsService } from '../service/projects.service';
import { AreasService } from '../service/areas.service';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})

export class ProjectNewComponent implements OnInit {

  project : Project = new Project();
  area: Area = new Area();

  areas: any = [];
  userDetails: any;

  constructor(

    private router: Router, 
    private areasService: AreasService, 
    private projectsService: ProjectsService, 
    private usersService: UsersService,
    private authService: AuthService

  ) {}

  ngOnInit() { 
    
    this.areasService.getAreas().subscribe(data => { this.areas = data }); 
    
    this.userDetails = this.authService.decodeAuthenticatedUserToken();


    if (this.userDetails) {

      this.usersService.getUser(this.userDetails.userId).subscribe((user: any) => { this.userDetails = user; })

    }

  }

  newProject() {

    const currentDate = new Date();

    const newProject = {

      userId: this.userDetails,
      title: this.project.title,
      dateAdded: currentDate,
      areaId: this.area,
      description: this.project.description,
      totalAmount: 0,
    }

    console.log(newProject);
    
    this.projectsService.newProject(newProject);

    this.navigateToProjects();

  }

  cancelInsert() { this.navigateToProjects(); }

  navigateToProjects() { this.router.navigate(['/projects']); }

}
