import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';
import { YourProjectsViewComponent } from './Views/your-projects-view/your-projects-view.component';
import { ProjectHomeComponent } from './Views/project-home/project-home.component';
import { ProjectMembersComponent } from './Views/project-members/project-members.component';
import { NotificationsComponent } from './Views/notifications/notifications.component';
import { AuditLogComponent } from './Views/audit-log/audit-log.component';
import { ArchiveComponent } from './Views/archive/archive.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { AddProjectFormComponent } from './components/formPopUps/add-project-form/add-project-form.component';
import { AddTaskFormComponent } from './components/formPopUps/add-task-form/add-task-form.component';
import { AddFunctionalityFormComponent } from './components/formPopUps/add-functionality-form/add-functionality-form.component';
import { RegisterFormComponent } from './components/formPopUps/register-form/register-form.component';
import { LoginFormComponent } from './components/formPopUps/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { KanbanBoardComponent } from './views/kanban-board/kanban-board.component';
import { ProjectsComponent } from './views/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarNavComponent,
    HomeScreenComponent,
    YourProjectsViewComponent,
    ProjectHomeComponent,
    ProjectMembersComponent,
    NotificationsComponent,
    AuditLogComponent,
    ArchiveComponent,
    DashboardComponent,
    AddProjectFormComponent,
    AddTaskFormComponent,
    AddFunctionalityFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    KanbanBoardComponent,
    ProjectsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
