import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationsService } from 'src/app/service/notifications.service';
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
    private notificationsService: NotificationsService,
    private router: Router,
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

  markNotificationAsRead(unreadNotification: any) {

    unreadNotification.read = true;

    this.notificationsService.editNotification(unreadNotification);

    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; }
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(['/notifications']);

    //this.navigateTo...();

  };

  displayedUnreadColumns: string[] = ['createdDate', 'message', 'markAsRead'];
  displayedReadColumns: string[] = ['createdDate', 'message'];

}