import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { GlobalStateService } from 'src/app/Services/global-state.service';
import { ProjectService } from 'src/app/Services/project-service.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';
import { Priority, State, Task, User } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {

   @Input() task!:Task

   @Input() membersID! : number[]

   taskForm :any

   protected selectFields = Object.values(Priority)
   
   users$?: Observable<User[]>
   

   constructor(private taskService:TaskService,private authService:AuthService,private projectService:ProjectService,private globalService:GlobalStateService, private userService :UserService){

   }

   
   submitHandler(){
    this.taskService.updateTask(this.task.id,this.taskForm.value)
   }

   ngOnInit(): void {
    this.globalService.getCurrent().subscribe(val=>{
       this.projectService.getProject(val!).subscribe(val2=>{
        this.users$ = this.userService.getUsersFromIds(val2?.MembersID!)   
      })
    })
    


    this.taskForm = new FormGroup({
      id:new FormControl(this.task.id),
      funcID:new FormControl(this.task.funcID),
      ProjectID:new FormControl(this.task.ProjectID),
      Name:new FormControl(this.task.Name),
      Desc:new FormControl(this.task.Desc),
      Priority:new FormControl(this.task.Priority),
      State:new FormControl(this.task.State),
      AddedDate:new FormControl(this.task.State),
      StartDate:new FormControl(this.task.StartDate),
      FinishDate:new FormControl(this.task.FinishDate),
      ExpTime:new FormControl(this.task.ExpTime),
      AssignedID: new FormControl(this.task.AssignedID)
    })
   }

   
}
