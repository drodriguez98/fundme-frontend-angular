import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})

export class UserDeleteComponent implements OnInit {

  userId: number;

  constructor(

    private usersService: UsersService,
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: number },
    private router: Router

  ) { this.userId = data.userId; }

  ngOnInit() { }

  confirm(): void {

    this.usersService.deleteUser(this.userId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; }
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(['/login']);

  }

}