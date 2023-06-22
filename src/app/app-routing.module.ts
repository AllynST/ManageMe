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
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from 'src/guards/auth.guard';


const routes: Routes = [
  // {path:'',component:HomeScreenComponent},

  {path:'Home',component:HomeScreenComponent, canActivate:[AuthGuard]},
  {path:'',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Projets',component:ProjectsComponent, canActivate:[AuthGuard]},
  {path:'ProjectFunc/:id',component:ProjectFuncComponent, canActivate:[AuthGuard]},
  {path:'Account/:id',component:AccountComponent, canActivate:[AuthGuard]},
  {path:'ProjectHome/:id',component:ProjectHomeComponent, canActivate:[AuthGuard]},
  {path:'KanbanBoard/:id',component:KanbanBoardComponent, canActivate:[AuthGuard]},
  {path:'ProjectMembers/:id',component:ProjectMembersComponent, canActivate:[AuthGuard]},
  {path:'AuditLog',component:AuditLogComponent, canActivate:[AuthGuard]},
  {path:'Archive',component:ArchiveComponent, canActivate:[AuthGuard]},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
