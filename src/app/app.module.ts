import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DonationHomeComponent } from './donation-home/donation-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectHomeComponent,
    DonationHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
