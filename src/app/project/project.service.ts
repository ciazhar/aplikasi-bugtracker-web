import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjectList() {
    let projectList = [
      {name: "A-001", currentVersion: "V0.0.1.1", status: "rilis", projectManager: "PM-001"},
      {name: "A-002", currentVersion: "v0.0.0.2", status: "belum rilis", projectManager: "PM-002"}
    ];
    return Promise.resolve(projectList);
  }

  save(project : Project) : Promise<string>{
    return Promise.resolve("success");
  }

}
