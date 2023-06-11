import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProjectService } from 'src/app/Services/project-service.service';
import { UserService } from 'src/app/Services/user.service';
import { Project, User } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.scss']
})
export class ProjectMembersComponent {

  protected project$!: Observable<Project | undefined> 
  protected users$!: Observable<User[]> 

  id!:number

  

  constructor(private projectService:ProjectService,private userService: UserService,private route : ActivatedRoute){

  }

  ngOnInit(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.projectService.getProject(this.id).subscribe((proj)=>{
      this.users$= this.userService.getUsersFromIds(proj!.MembersID)
    })
    
  }
}
