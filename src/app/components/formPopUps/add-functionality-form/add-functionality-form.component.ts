import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Priority, State } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-add-functionality-form',
  templateUrl: './add-functionality-form.component.html',
  styleUrls: ['./add-functionality-form.component.scss']
})
export class AddFunctionalityFormComponent {

  protected selectFields = Object.values(Priority)
  
  constructor(private authService:AuthService){

  }

  funcForm = new FormGroup({
    id:new FormControl(Date.now()),
    Name:new FormControl(),
    Desc:new FormControl(),
    Priority:new FormControl(),
    Owner:new FormControl(this.authService.getCurrentUserID()),
    State:new FormControl(State.todo),
    Tasks:new FormControl([])
  })

  
  formSubmit(){
    //TODO connect to func service
    console.log(this.funcForm.value)
  }

}
