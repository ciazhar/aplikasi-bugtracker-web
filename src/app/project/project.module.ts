import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';

import { AuthGuard } from '../shared/authguard';


const routingProject : Routes = [
  { path: "project/project-list", component: ProjectListComponent, canActivate : [AuthGuard] },
  { path: "project/project-detail", component: ProjectDetailComponent, canActivate : [AuthGuard] },
  { path: "project/create-new-project", component: CreateNewProjectComponent, canActivate : [AuthGuard] }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingProject)
  ],
  declarations: [ProjectListComponent, ProjectDetailComponent, CreateNewProjectComponent],
  providers :[
    AuthGuard
  ]

})
export class ProjectModule { }
