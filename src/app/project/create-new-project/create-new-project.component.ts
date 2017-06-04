import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';

import { Project } from '../project.model';

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.css']
})
export class CreateNewProjectComponent implements OnInit {

  project : Project = new Project("ass","ads","adsa","ads","adsa");

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
  }

}
