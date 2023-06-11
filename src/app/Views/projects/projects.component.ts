import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GlobalStateService } from 'src/app/Services/global-state.service';
import { ProjectService } from 'src/app/Services/project-service.service';
import { Project } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})



export class ProjectsComponent implements OnInit {

  
 

  protected projects$? :Observable<Project[]>;

  protected formPopUp = false;

  constructor(private projectService :ProjectService,private router : Router,private globalStateService:GlobalStateService){
  
  }

  ngOnInit(){
      this.projects$ = this.projectService.getProjects();
      
  }

  popUpSwitch(){
    this.formPopUp = !this.formPopUp
  }

  goToProjectPage(projectID:number){
    this.globalStateService.switchCurrent(projectID)
    this.router.navigateByUrl(`/ProjectHome/${projectID}`);
    //this.id = this.route.snapshot.paramMap.get('id')
  }


}
