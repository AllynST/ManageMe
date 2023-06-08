import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';
import { ProjectHomeComponent } from './Views/project-home/project-home.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { ProjectMembersComponent } from './Views/project-members/project-members.component';
import { AuditLogComponent } from './Views/audit-log/audit-log.component';
import { ArchiveComponent } from './Views/archive/archive.component';
import { NotificationsComponent } from './Views/notifications/notifications.component';
import { KanbanBoardComponent } from './views/kanban-board/kanban-board.component';
import { ProjectsComponent } from './views/projects/projects.component';


const routes: Routes = [
  {path:'',component:HomeScreenComponent},
  {path:'Home',component:HomeScreenComponent},
  {path:'Projets',component:ProjectsComponent},
  {path:'ProjectHome',component:ProjectHomeComponent},
  {path:'Notifications',component:NotificationsComponent},
  {path:'KanbanBoard',component:KanbanBoardComponent},
  {path:'ProjectDashboard',component:DashboardComponent},
  {path:'ProjectMembers',component:ProjectMembersComponent},
  {path:'AuditLog',component:AuditLogComponent},
  {path:'Archive',component:ArchiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
