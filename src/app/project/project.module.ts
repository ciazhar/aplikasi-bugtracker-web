import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';

import { AuthGuard } from '../shared/authguard';
import { ProjectService } from './project.service';


const routingProject : Routes = [
  { path: "project/project-list", component: ProjectListComponent, canActivate : [AuthGuard] },
  { path: "project/project-detail", component: ProjectDetailComponent, canActivate : [AuthGuard] },
  { path: "project/create-new-project", component: CreateNewProjectComponent, canActivate : [AuthGuard] }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingProject)
  ],
  declarations: [ProjectListComponent, ProjectDetailComponent, CreateNewProjectComponent],
  providers :[
    AuthGuard, ProjectService
  ]

})
export class ProjectModule { }
