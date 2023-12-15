import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './component/projects/project.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DonationsComponent } from './component/donations/donationcomponent';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ProjectDetailComponent } from './component/project-details/project-details.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ProjectNewComponent } from './component/project-new/project-new.component';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { MyDonationsComponent } from './component/my-donations/my-donations.component';
import { DonationNewComponent } from './component/donation-new/donation-new.component';
import { CommentNewComponent } from './component/comment-new/comment-new.component';
import { RegisterComponent } from './component/register/register.component';
import { ProjectDeleteComponent } from './component/project-delete/project-delete.component';
import { UserDeleteComponent } from './component/user-delete/user-delete.component';
import { ProjectEditComponent } from './component/project-edit/project-edit.component';
import { DatePipe } from '@angular/common';
import { EditUserDetailsComponent } from './component/user-edit/user-edit.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    DonationsComponent,
    DashboardComponent,
    LoginComponent,
    ProjectDetailComponent,
    UserProfileComponent,
    ProjectNewComponent,
    MyProjectsComponent,
    MyDonationsComponent,
    DonationNewComponent,
    CommentNewComponent,
    RegisterComponent,
    ProjectDeleteComponent,
    UserDeleteComponent,
    ProjectEditComponent,
    EditUserDetailsComponent,
    NotificationsComponent,
    UserDetailsComponent,
  ],
  entryComponents: [ProjectDeleteComponent, UserDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
