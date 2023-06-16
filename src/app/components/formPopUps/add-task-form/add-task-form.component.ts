import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { FunctionalitiesService } from 'src/app/Services/functionalities.service';
import { GlobalStateService } from 'src/app/Services/global-state.service';
import { ProjectService } from 'src/app/Services/project-service.service';
import { TaskService } from 'src/app/Services/task.service';
import { Functionality, Priority, Project, State, Task } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit{

  protected selectFields = Object.values(Priority)


  @Input() targetFunc?:number
  protected currentProj$!: Observable<Project|undefined>;
  curProj!:number|undefined;
  protected funcs$! :Observable<Functionality>

  taskForm!: FormGroup
  constructor(private taskService:TaskService,private funcService:FunctionalitiesService,private route:ActivatedRoute, private authService:AuthService,private projectService:ProjectService,private globalService:GlobalStateService){

  }  
  ngOnInit(){
    this.globalService.getCurrent().subscribe(val=>{
      console.log(val)
      this.currentProj$ = this.projectService.getProject(val!)
      this.curProj = val!;
    })
    
    this.taskForm = new FormGroup({
      id:new FormControl(Date.now()),
      funcID:new FormControl(0),
      ProjectID:new FormControl(this.curProj),
      Name:new FormControl(),
      Desc:new FormControl(),
      Priority:new FormControl(),
      State:new FormControl(State.todo),
      AddedDate:new FormControl(new Date()),
      StartDate:new FormControl(null),
      FinishDate:new FormControl(null),
      ExpTime:new FormControl(),
      OwnerID:new FormControl(this.authService.getCurrentUserID()),
      Tasks:new FormControl([]),
      AssignedID: new FormControl(null)
    })
    

    
  }

  getFuncName(funcID:number){
    let output:string
    this.funcService.getFunc(funcID).subscribe(val=>{
      output = val.Name
    })
    return output!;
  }

  


  formSubmit(){
    this.taskService.addTask(this.taskForm.value as Task)
    console.log(this.taskForm.value)
  }
}
