import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../interfaces/dataModels';

@Injectable({
  providedIn: 'root'
})


export class ProjectServiceService {

  private projects : BehaviorSubject<Project[]> = new BehaviorSubject([
    {
      id:1,
      Name:'Mentor Me',
      Desc:'HackatonProject sheep your hack',
      functionalities:[],
      createdBy:112,
      MembersID:[112],

    } as Project
  ]);

  private projects$ : Observable<Project[]> = this.projects.asObservable();

    

  constructor() {
    
  }


  addProject(){

  }

  getProjects(){
    let values:any
    this.projects$.subscribe((x:any)=>{
      values = x
    })
    return values
    
  }
}
