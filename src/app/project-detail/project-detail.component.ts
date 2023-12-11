import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({

  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']

})

export class ProjectDetailComponent implements OnInit {

  project: any;

  constructor(

    private projectsService: ProjectsService, 
    private route: ActivatedRoute, 
    private router: Router,
    public dialog: MatDialog
  
  ) {}

  ngOnInit() { this.projectsService.getProject(this.route.snapshot.params['id']).subscribe(data => { this.project = data }) }

}