import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';
import { ProjectHomeComponent } from './Views/project-home/project-home.component';
import { ProjectMembersComponent } from './Views/project-members/project-members.component';
import { AuditLogComponent } from './Views/audit-log/audit-log.component';
import { ArchiveComponent } from './Views/archive/archive.component';
import { KanbanBoardComponent } from './views/kanban-board/kanban-board.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectFuncComponent } from './views/project-func/project-func.component';
import { AccountComponent } from './views/account/account.component';


const routes: Routes = [
  {path:'',component:HomeScreenComponent},
  {path:'Home',component:HomeScreenComponent},
  {path:'Projets',component:ProjectsComponent},
  {path:'ProjectFunc/:id',component:ProjectFuncComponent},
  {path:'Account/:id',component:AccountComponent},
  {path:'ProjectHome/:id',component:ProjectHomeComponent},
  {path:'KanbanBoard/:id',component:KanbanBoardComponent},
  {path:'ProjectMembers/:id',component:ProjectMembersComponent},
  {path:'AuditLog',component:AuditLogComponent},
  {path:'Archive',component:ArchiveComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
