import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectHomeComponent } from './component/project-home/project-home.component';
import { DonationHomeComponent } from './component/donation-home/donation-home.component';
import { DashboardHomeComponent } from './component/dashboard-home/dashboard-home.component';
import { LoginHomeComponent } from './component/login-home/login-home.component';
import { AuthGuard } from './auth/auth.guard'; // Importa el AuthGuard
import { ProjectDetailComponent } from './component/project-detail/project-detail.component';

const routes: Routes = [
  // Rutas públicas
  { path: 'login', component: LoginHomeComponent },
  // Rutas protegidas por AuthGuard
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
    canActivate: [AuthGuard] // Protege la ruta con AuthGuard
  },
  {
    path: 'projects',
    component: ProjectHomeComponent,
    canActivate: [AuthGuard] // Protege la ruta con AuthGuard
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent,
    canActivate: [AuthGuard] // Protege la ruta con AuthGuard
  },
  {
    path: 'donations',
    component: DonationHomeComponent,
    canActivate: [AuthGuard] // Protege la ruta con AuthGuard
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

export class AppRoutingModule {}
