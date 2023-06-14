import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { ProjectService } from 'src/app/Services/project-service.service';
import { Project } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.scss'],
  
})

export class AddProjectFormComponent implements OnInit  {

  
  ngOnInit(): void {
    
  }

  constructor(private projectService : ProjectService,private authService :AuthService){
   
  }

  projectForm = new FormGroup({
    id: new FormControl(Date.now()),
    Name: new FormControl(''),
    Desc: new FormControl(''),
    functionalities: new FormControl([]),
    createdBy: new FormControl(this.authService.getCurrentUserID()),
    MembersID: new FormControl([this.authService.getCurrentUserID()])
    
  })

  //TODO CHANGE ANY TO CORRECT TYPE
  formSubmit(){
    this.projectService.addProject(this.projectForm.value as Project);
  }

}
