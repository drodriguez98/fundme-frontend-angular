import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectHomeComponent } from './component/project-home/project-home.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DonationHomeComponent } from './component/donation-home/donation-home.component';
import { DashboardHomeComponent } from './component/dashboard-home/dashboard-home.component';
import { LoginHomeComponent } from './component/login-home/login-home.component';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ProjectDetailComponent } from './component/project-detail/project-detail.component';
import { ActiveUserDetailComponent } from './component/active-user-detail/active-user-detail.component';
import { ProjectNewComponent } from './component/project-new/project-new.component';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { MyDonationsComponent } from './component/my-donations/my-donations.component';
import { DonationNewComponent } from './component/donation-new/donation-new.component';
import { CommentNewComponent } from './component/comment-new/comment-new.component';
import { RegisterComponent } from './component/register/register.component';
import { ProjectDeleteComponent } from './component/project-delete/project-delete.component';
import { ActiveUserDeleteComponent } from './component/active-user-delete/active-user-delete.component';
import { ProjectEditComponent } from './component/project-edit/project-edit.component';
import { DatePipe } from '@angular/common';
import { ActiveUserEditComponent } from './component/active-user-edit/active-user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectHomeComponent,
    DonationHomeComponent,
    DashboardHomeComponent,
    LoginHomeComponent,
    ProjectDetailComponent,
    ActiveUserDetailComponent,
    ProjectNewComponent,
    MyProjectsComponent,
    MyDonationsComponent,
    DonationNewComponent,
    CommentNewComponent,
    RegisterComponent,
    ProjectDeleteComponent,
    ActiveUserDeleteComponent,
    ProjectEditComponent,
    ActiveUserEditComponent,
  ],
  entryComponents: [ProjectDeleteComponent, ActiveUserDeleteComponent],
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
