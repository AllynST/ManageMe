import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ProjectService } from 'src/app/Services/project-service.service';
import { UserService } from 'src/app/Services/user.service';
import { Priority, Project, User } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-project-func',
  templateUrl: './project-func.component.html',
  styleUrls: ['./project-func.component.scss']
})
export class ProjectFuncComponent {
  
  protected project$!: Observable<Project | undefined> 
  protected users$!: Observable<User[] | undefined>

  protected formPopUpFunc = false;
  protected formPopUpTask = false;

  protected selectedFunc?:number;
  

  id!:number

  constructor(private projectService:ProjectService,private userService:UserService,private route : ActivatedRoute){

  }

  ngOnInit(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.project$ = this.projectService.getProject(this.id)
    this.users$ = this.userService.getUsers();
  }

  
  funcPopUpSwitch(){
    this.formPopUpFunc = !this.formPopUpFunc
  }
  taskPopUpSwitch(targetFuncID:number){
    this.selectedFunc = targetFuncID;
    this.formPopUpTask = !this.formPopUpTask
  }


  getUserData(userID:number|null):string{

    let output;
    this.users$.pipe(
      map((users) => users!.find((user:User) => userID === user.id)) 
    ).subscribe(val=>{
      output = val
    })
    return output != null ? (output as User).Login: ""
    
  }

  getFlagColor(prio: Priority){
    switch(prio){
      case Priority.very_low:
        return "text-white"

      case Priority.low:
        return"text-green"
   
      case Priority.medium:
        return"text-blue"
    
      case Priority.high:
        return"text-orange"
 
      case Priority.urgent:
        return"text-red"

    }
  }

}
