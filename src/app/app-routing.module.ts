import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { CvComponent } from './pages/public/cv/cv.component';
import { ControlPanelComponent } from './pages/admin/control-panel/control-panel.component';
import { NewJobComponent } from './pages/admin/new-job/new-job.component';
import { NewEducationComponent } from './pages/admin/new-education/new-education.component';
import { EditDetailsComponent } from './pages/admin/edit-details/edit-details.component';
import { EditJobComponent } from './pages/admin/edit-job/edit-job.component';
import { EditEducationComponent } from './pages/admin/edit-education/edit-education.component';


const routes: Routes = [
{path: "", component: HomeComponent,
  pathMatch: 'full',},
{path:"cv", component: CvComponent,
},
{path:"admin",component: ControlPanelComponent,
},
{path:"edit-job",component: NewJobComponent,
},
{path:"new-education",component: NewEducationComponent,
},
{path:"edit-details",component: EditDetailsComponent,
},
{path:"edit-job",component: EditJobComponent,
},
{path:"edit-education",component: EditEducationComponent,
}

];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ,CommonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
