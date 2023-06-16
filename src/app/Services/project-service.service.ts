import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, filter, find, findIndex, first, map } from 'rxjs';
import { Project } from '../interfaces/dataModels';
import { sampleFunc } from '../interfaces/sampleData';


@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  private projects : BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([
    {
      id:1,
      Name:'Mentor Me',
      Desc:'HackatonProject sheep your hack',
      functionalities:[1,2,3],
      createdBy:0,
      MembersID:[0,1],

    },
    {
      id:2,
      Name:'Microsoft',
      Desc:'Oposite of Hugehard',
      functionalities:[1,2,3],
      createdBy:0,
      MembersID:[0],

    }
  ]);

  private projects$ : Observable<Project[]> = this.projects.asObservable();
    

  constructor() {
  }
 

  getProjects(){
    return this.projects$
  }

  getProject(projectID:number):Observable<Project | undefined>{
    return this.projects$.pipe(
      map((projects:any) => projects.find((project:Project) => projectID === project.id))
      
    )
  }
  addProject(project : Project){
    let temp = this.projects.getValue()
    temp.push(project)
    this.projects.next(temp)
  }

  addFunc(projectID:number,funcID:number){
    let temp = this.projects.getValue()
    let targetIndex = temp.findIndex(proj=>proj.id === projectID)
    temp[targetIndex].functionalities?.push(funcID)
    temp.splice(temp.findIndex((project:Project)=> projectID === project.id),1,temp[targetIndex])
    this.projects.next(temp)
 
  }

  updateProject(projectID:number, project:Project){
    let temp = this.projects.getValue()
    temp.splice(temp.findIndex((project:Project)=> projectID === project.id),1,project)
    this.projects.next(temp)
  }

  deleteProject(projectId:number){    
    let temp = this.projects.getValue()
    temp.splice(temp.findIndex((project:Project)=> projectId === project.id),1)
    this.projects.next(temp)
    
  }

  

}
