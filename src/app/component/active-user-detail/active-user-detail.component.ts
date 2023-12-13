import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/service/users.service';
import { ActiveUserDeleteComponent } from '../active-user-delete/active-user-delete.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({

  selector: 'app-active-user-detail',
  templateUrl: './active-user-detail.component.html',
  styleUrls: ['./active-user-detail.component.css']

})

export class ActiveUserDetailComponent implements OnInit {

  userDetails: any;

  constructor(
    
    private authService: AuthService, 
    private userService: UsersService,
    public router: Router,
    public dialog: MatDialog 

  ) {}

  ngOnInit() {

    this.userDetails = this.authService.decodeAuthenticatedUserToken();

    if (this.userDetails) {

      this.userService.getUser(this.userDetails.userId).subscribe(
        
        (user: any) => { 
          
          this.userDetails = user; 
          
        })

    }

  }

  // openDetailForm(row:any) { this.router.navigate(['/project', row.projectId]); }

  editUserDetail(user: any) { this.router.navigate(['/profile/edit', user]); }

  openDeleteDialog (userId: number): void { this.dialog.open(ActiveUserDeleteComponent, { data: { userId: userId } }); }

}