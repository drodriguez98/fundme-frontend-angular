import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  unreadNotifications: any = [];
  readNotifications: any = [];

  userDetails: any;

  constructor(

    private usersService: UsersService,
    private authService: AuthService,
    public dialog: MatDialog

  ) { }

  ngOnInit() {

    this.userDetails = this.authService.decodeAuthenticatedUserToken();

    if (this.userDetails) {

      this.usersService.getUser(this.userDetails.userId).subscribe(

        (user: any) => {

          this.userDetails = user;
          this.loadUnreadNotifications(this.userDetails.userId);
          this.loadReadNotifications(this.userDetails.userId);

        })

    }

  }

  loadUnreadNotifications(userId: number) {

    this.usersService.getUnreadNotificationsByUserId(userId).subscribe(unreadNotifications => {

      this.unreadNotifications = unreadNotifications;

    });

  }

  loadReadNotifications(userId: number) {

    this.usersService.getReadNotificationsByUserId(userId).subscribe(readNotifications => {

      this.readNotifications = readNotifications;

    });

  }

  displayedUnreadColumns: string[] = ['createdDate', 'message'];
  displayedReadColumns: string[] = ['createdDate', 'message'];

}
