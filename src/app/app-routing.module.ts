import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectHomeComponent } from './component/project-home/project-home.component';
import { DonationHomeComponent } from './component/donation-home/donation-home.component';
import { DashboardHomeComponent } from './component/dashboard-home/dashboard-home.component';
import { LoginHomeComponent } from './component/login-home/login-home.component';
import { AuthGuard } from './auth/auth.guard'
import { ProjectDetailComponent } from './component/project-detail/project-detail.component';
import { ActiveUserDetailComponent } from './component/active-user-detail/active-user-detail.component';
import { ProjectNewComponent } from './component/project-new/project-new.component';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { MyDonationsComponent } from './component/my-donations/my-donations.component';
import { DonationNewComponent } from './component/donation-new/donation-new.component';
import { CommentNewComponent } from './component/comment-new/comment-new.component';
import { RegisterComponent } from './component/register/register.component';
import { ProjectEditComponent } from './component/project-edit/project-edit.component';
import { ActiveUserEditComponent } from './component/active-user-edit/active-user-edit.component';


const routes: Routes = [
  // Rutas públicas
  { path: 'login', component: LoginHomeComponent },
  { path: 'register', component: RegisterComponent },
  // Rutas protegidas por AuthGuard
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/new',
    component: ProjectNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/myprojects',
    component: MyProjectsComponent,
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
    component: DonationHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'donations/mydonations',
    component: MyDonationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ActiveUserDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/edit/:id',
    component: ActiveUserEditComponent,
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
