import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreasService } from 'src/app/service/areas.service';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})

export class ProjectEditComponent implements OnInit {

  project: any;
  areas: any;

  constructor(

    private projectsService: ProjectsService,
    private areasService: AreasService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe

  ) { }

  ngOnInit() {

    this.projectsService.getProject(this.route.snapshot.params['id']).subscribe(data => {

      this.project = data;
      this.formatDate();

    });

    this.areasService.getAreas().subscribe(data => { this.areas = data });

  }

  formatDate() {

    const date = new Date(this.project.date_added);
    this.project.date_added = this.datePipe.transform(date, 'yyyy-MM-dd');

  }

  editProject(): void {

    this.projectsService.editProject(this.project);
    this.navigateToDetail();

  }

  cancelEdit() { this.navigateToDetail(); }

  navigateToDetail() { this.router.navigate(['/project', this.route.snapshot.params['id']]) };

}