import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { FunctionalitiesService } from 'src/app/Services/functionalities.service';
import { Functionality, Priority, State } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-add-functionality-form',
  templateUrl: './add-functionality-form.component.html',
  styleUrls: ['./add-functionality-form.component.scss']
})
export class AddFunctionalityFormComponent implements OnInit {

  @Input() projID!:number;


  protected selectFields = Object.values(Priority)
  
  funcForm!:FormGroup

  constructor(
    private authService:AuthService,
    private funcService:FunctionalitiesService){

  }

  ngOnInit(): void {
    console.log(this.projID)

    this.funcForm = new FormGroup({
      id:new FormControl(Date.now()),
      ProjectID: new FormControl(this.projID),
      Name:new FormControl(''),
      Desc:new FormControl(''),
      Priority:new FormControl(Priority.low),
      Owner:new FormControl(this.authService.getCurrentUserID()),
      State:new FormControl(State.todo),
      Tasks:new FormControl([])
    })
  }

  

  
  formSubmit(){
    this.funcService.addFunc(this.funcForm.value as Functionality)
  }

}
