import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/Services/project-service.service';
import { Project } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.scss']
})
export class ProjectHomeComponent implements OnInit{


  protected project$!: Observable<Project | undefined> 

  id!:number

  constructor(private service:ProjectService,private route : ActivatedRoute){

  }

  ngOnInit(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.project$ = this.service.getProject(this.id)
  }

}
