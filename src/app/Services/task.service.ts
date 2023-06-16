import { Injectable } from '@angular/core';
import { sampleTasks } from '../interfaces/sampleData';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Task } from '../interfaces/dataModels';
import { FunctionalitiesService } from './functionalities.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks : BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([
    ...sampleTasks
  ]);

  private tasks$ : Observable<Task[]> = this.tasks.asObservable();
    

  constructor(private funcService:FunctionalitiesService) { 


  } 
  
  getTasks():Observable<Task[]>{
    return this.tasks$;
  }

  getTask(taskID:number){
    return this.tasks$.pipe(
      map((tasks:any) => tasks.find((task:Task) => taskID === task.id))      
    )
  }

  addTask(task:Task){
    console.log(task)
    let temp = this.tasks.getValue()
    temp.push(task)
    this.funcService.addTask(task.funcID,task.id)
    this.tasks.next(temp)
  } 

  updateTask(taskID:number,task:Task){
    console.log(task)
    let temp = this.tasks.getValue()
    console.log("temp")
    temp.splice(temp.findIndex((task:Task)=> taskID === task.id),1,task)
    this.tasks.next(temp)
  }

  deleteTask(taskID:number){
    let temp = this.tasks.getValue()
    temp.splice(temp.findIndex((task:Task)=> taskID === task.id),1)
    this.tasks.next(temp)
  }
}
