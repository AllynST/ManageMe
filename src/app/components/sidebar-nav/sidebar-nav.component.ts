import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStateService } from 'src/app/Services/global-state.service';
import { ProjectService } from 'src/app/Services/project-service.service';
import { Project } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit{

  project$!: Observable<Project | undefined>;
  global$! : Observable<number | null>
  

 constructor(private globalStateService:GlobalStateService,private projectService:ProjectService){

 }

 ngOnInit(){
  this.global$ = this.globalStateService.getCurrent()
  this.global$.subscribe(val=>{
    if(val != null){
      this.project$ = this.projectService.getProject(val)
    }   
  })
  

 };
  
}



