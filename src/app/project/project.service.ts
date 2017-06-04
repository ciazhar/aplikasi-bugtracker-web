import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjectList() {
  console.log("Menjalankan service getDaftarTransaksi");
  let projectList = [
    {project: "A-001", currentVersion: "V0.0.1.1", keterangan: "rilis", projectManager: "PM-001"},
    {project: "A-002", currentVersion: "v0.0.0.2", keterangan: "belum rilis", projectManager: "PM-002"}
  ];
  return Promise.resolve(projectList);
}



}
