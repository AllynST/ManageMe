import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/Services/project-service.service';
import { Priority, Project } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-project-func',
  templateUrl: './project-func.component.html',
  styleUrls: ['./project-func.component.scss']
})
export class ProjectFuncComponent {
  
  protected project$!: Observable<Project | undefined> 

  id!:number

  constructor(private service:ProjectService,private route : ActivatedRoute){

  }

  ngOnInit(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.project$ = this.service.getProject(this.id)
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
