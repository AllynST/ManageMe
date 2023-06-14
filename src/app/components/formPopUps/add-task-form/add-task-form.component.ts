import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Priority, State } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {

  protected selectFields = Object.values(Priority)


  @Input() targetFunc?:number

  constructor(private authService:AuthService){
    console.log(Priority)
    console.log(this.selectFields)
  }  


  taskForm = new FormGroup({
    id:new FormControl(Date.now()),
    Name:new FormControl(),
    Desc:new FormControl(),
    Priority:new FormControl(),
    State:new FormControl(State.todo),
    AddedDate:new FormControl(new Date()),
    StartDate:new FormControl(null),
    FinishDate:new FormControl(null),
    ExpTime:new FormControl(),
    OwnerID:new FormControl(this.authService.getCurrentUserID()),
    Tasks:new FormControl([])
  })


  formSubmit(){
    //TODO CONNECT TO TASK SERVICE
    console.log(this.taskForm.value)
  }
}
