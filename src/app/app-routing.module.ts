import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './component/projects/project.component';
import { DonationsComponent } from './component/donations/donationcomponent';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard'
import { ProjectDetailComponent } from './component/project-details/project-details.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ProjectNewComponent } from './component/project-new/project-new.component';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { MyDonationsComponent } from './component/my-donations/my-donations.component';
import { DonationNewComponent } from './component/donation-new/donation-new.component';
import { CommentNewComponent } from './component/comment-new/comment-new.component';
import { RegisterComponent } from './component/register/register.component';
import { ProjectEditComponent } from './component/project-edit/project-edit.component';
import { EditUserDetailsComponent } from './component/user-edit/user-edit.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';


const routes: Routes = [
  // Rutas públicas
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Rutas protegidas por AuthGuard
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/new',
    component: ProjectNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myprojects',
    component: MyProjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/edit/:id',
    component: ProjectEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/donate/:id',
    component: DonationNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/comment/:id',
    component: CommentNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'donations',
    component: DonationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mydonations',
    component: MyDonationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/edit/:id',
    component: EditUserDetailsComponent,
    canActivate: [AuthGuard]
  },
  // Ruta predeterminada: redirige a dashboard si está autenticado, de lo contrario a login
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard] // Protege la ruta con AuthGuard
  },
  // Ruta de registro u otras rutas públicas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
