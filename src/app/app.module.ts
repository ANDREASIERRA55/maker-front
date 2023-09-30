import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './pages/public/public.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { ControlPanelComponent } from './pages/admin/control-panel/control-panel.component';
import { EditDetailsComponent } from './pages/admin/edit-details/edit-details.component';
import { EditEducationComponent } from './pages/admin/edit-education/edit-education.component';
import { EditJobComponent } from './pages/admin/edit-job/edit-job.component';
import { NewEducationComponent } from './pages/admin/new-education/new-education.component';
import { NewJobComponent } from './pages/admin/new-job/new-job.component';
import { CvComponent } from './pages/public/cv/cv.component';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicComponent,
    AdminComponent,
    FooterComponent,
    ControlPanelComponent,
    EditDetailsComponent,
    EditEducationComponent,
    EditJobComponent,
    NewEducationComponent,
    NewJobComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
