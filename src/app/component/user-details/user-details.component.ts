import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  user: any;

  projects: any = [];
  donations: any = [];

  constructor(

    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    const userId = +this.route.snapshot.params['id'];

    this.usersService.getUser(userId).subscribe((data) => {

      this.user = data;
      this.loadProjectsByUser(this.user.userId);
      this.loadDonationsByUser(this.user.userId);

    });

  }

  loadProjectsByUser(userId: number) {

    this.usersService.getProjectsByUserId(userId).subscribe(projects => {

      this.projects = projects;

    })

  }

  loadDonationsByUser(userId: number) {

    this.usersService.getDonationsByUserId(userId).subscribe(donations => {

      this.donations = donations;

    })

  }

  openProjectDetails(row: any) { this.router.navigate(['/project', row.projectId]); }

  displayedProjectsColumns: string[] = ['dateAdded', 'title', 'totalAmount'];
  displayedDonationsColumns: string[] = ['dateAdded', 'title', 'amount'];

}