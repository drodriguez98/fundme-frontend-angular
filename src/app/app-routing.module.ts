import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { DonationHomeComponent } from './donation-home/donation-home.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';


const routes: Routes = [

  { path: 'dashboard', component: DashboardHomeComponent },
  { path: 'projects', component: ProjectHomeComponent },
  { path: 'donations', component: DonationHomeComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }