import { Injectable } from '@angular/core';
import { ProjectService } from './project-service.service';
import { GlobalStateService } from './global-state.service';
import { Functionality, Project } from '../interfaces/dataModels';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { sampleFunc } from '../interfaces/sampleData';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {


  private funcs : BehaviorSubject<Functionality[]> = new BehaviorSubject<Functionality[]>([
    ...sampleFunc
  ]);
  
  private funcs$ : Observable<Functionality[]> = this.funcs.asObservable();



  constructor(private projectService:ProjectService,private globalService:GlobalStateService) {


  }

  getFuncByUser(){
    //NO
  }

  getFunc(funcID:number):Observable<Functionality>{
      return this.funcs$.pipe(
        map((func:any) => func.find((func:Functionality) => funcID === func.id))        
      )

  }

  getCurrentProjObj(projectID:number){
    let output$ : Observable<Project|undefined>;
    this.globalService.getCurrent().subscribe(val=>{
      output$ = this.projectService.getProject(val!)
    })
    return output$!
  }

  addFunc(func:Functionality){    
    let temp = this.funcs.getValue()
    temp.push(func)
    this.funcs.next(temp)
    this.projectService.addFunc(func.ProjectID,func.id)
        
  }

  addTask(funcID:number,TaskID:number){
    console.log(TaskID)
    let temp = this.funcs.getValue()
    let targetIndex = temp.findIndex(func=>func.id === funcID)
    temp[targetIndex].Tasks?.unshift(TaskID)
    console.log(temp[targetIndex])
    temp.splice(temp.findIndex((func:Functionality)=> funcID === func.id),1,temp[targetIndex])
    this.funcs.next(temp)
 
  }
  
  updateFunc(funcID:number,func:Functionality){
    let temp = this.funcs.getValue()
    temp.splice(temp.findIndex((func:Functionality)=> funcID=== func.id),1,func)
    this.funcs.next(temp)
  }

  deleteFunc(funcID:number){
    let temp = this.funcs.getValue()
    temp.splice(temp.findIndex((func:Functionality)=> funcID === func.id),1)
    this.funcs.next(temp)
  } 







}
