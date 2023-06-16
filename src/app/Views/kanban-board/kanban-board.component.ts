import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { GlobalStateService } from 'src/app/Services/global-state.service';
import { ProjectService } from 'src/app/Services/project-service.service';
import { TaskService } from 'src/app/Services/task.service';
import { Task, Project, State, Functionality } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  id?:number;

  protected todoTasks:Task[] = []
  protected doingTasks:Task[] = []
  protected doneTasks:Task[] = []

  protected project$!: Observable<Project | undefined> 
  constructor(
    private projectService:ProjectService,
    private route:ActivatedRoute,
    private taskService:TaskService,
    private globalService:GlobalStateService
    ){

  }

  ngOnInit(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.project$ = this.projectService.getProject(this.id);

    this.globalService.getCurrent().subscribe(val=>{
      this.taskService.getTasks().subscribe(tasks=>{
        console.log(tasks)
        this.todoTasks = tasks.filter((task:Task)=>task.State === State.todo)
        this.doingTasks = tasks.filter((task:Task)=>task.State === State.doing)
        this.doneTasks = tasks.filter((task:Task)=>task.State === State.done)
      })
    })

    
  }
}


