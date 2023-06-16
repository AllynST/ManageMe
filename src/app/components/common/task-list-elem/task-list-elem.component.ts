import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';
import { Priority, Task, User } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-task-list-elem',
  templateUrl: './task-list-elem.component.html',
  styleUrls: ['./task-list-elem.component.scss']
})
export class TaskListElemComponent implements OnInit {

  @Input() taskID!:number


  protected task$!:Observable<Task>
  protected users$!: Observable<User[] | undefined>

  constructor(private taskService:TaskService,private userService:UserService){

  }

  ngOnInit(): void {
    this.task$ = this.taskService.getTask(this.taskID)
    this.users$ = this.userService.getUsers();
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
  getUserData(userID:number|null):string{

    let output;
    this.users$.pipe(
      map((users) => users!.find((user:User) => userID === user.id)) 
    ).subscribe(val=>{
      output = val
    })
    return output != null ? (output as User).Login: ""
    
  }
}


