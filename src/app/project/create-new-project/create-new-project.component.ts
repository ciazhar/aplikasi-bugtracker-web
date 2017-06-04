import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';

import { Project } from '../project.model';

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.css']
})
export class CreateNewProjectComponent implements OnInit {

  project : Project = new Project("","","","","");

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
  }

  save(){
    this.projectService.save(this.project)
    .then(hasi => {
      this.project = new Project("","","","","");
    });
  }

}
