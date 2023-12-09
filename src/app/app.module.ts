import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { MatButtonModule, MatIconModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DonationHomeComponent } from './donation-home/donation-home.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectHomeComponent,
    DonationHomeComponent,
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
