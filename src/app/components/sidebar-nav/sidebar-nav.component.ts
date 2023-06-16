import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { GlobalStateService } from 'src/app/Services/global-state.service';
import { ProjectService } from 'src/app/Services/project-service.service';
import { Project, User } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit{

  project$!: Observable<Project | undefined>;
  global$! : Observable<number | null>
  currentUser$! : Observable<User|null>
  

 constructor(private globalStateService:GlobalStateService,private authService:AuthService,private projectService:ProjectService){

 }

 ngOnInit(){
  this.currentUser$ = this.authService.getCurrentUser();
  this.global$ = this.globalStateService.getCurrent()
  this.global$.subscribe(val=>{
    if(val != null){
      this.project$ = this.projectService.getProject(val)
    }   
  })
  

 };
  
}



