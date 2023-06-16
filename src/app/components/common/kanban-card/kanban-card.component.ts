import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { ProjectService } from 'src/app/Services/project-service.service';
import { Project, State, Task } from 'src/app/interfaces/dataModels';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit{

  @Input() task?:Task
  
  ngOnInit(): void {

  }

  
}
