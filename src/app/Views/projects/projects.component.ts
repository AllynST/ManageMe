import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProjectServiceService } from 'src/app/Services/project-service.service';
import { Project } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers:  [ ProjectServiceService]
})



export class ProjectsComponent implements OnInit {

  
  private projectService = new ProjectServiceService()

  protected projects? : Project[];

  protected formPopUp = true;

  constructor(){
    
  }

  ngOnInit(){
      this.projects = this.projectService.getProjects();
      console.log(this.projects)
  }
}
