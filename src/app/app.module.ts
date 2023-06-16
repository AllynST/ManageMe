import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { HomeScreenComponent } from './Views/home-screen/home-screen.component';
import { YourProjectsViewComponent } from './Views/your-projects-view/your-projects-view.component';
import { ProjectHomeComponent } from './Views/project-home/project-home.component';
import { ProjectMembersComponent } from './Views/project-members/project-members.component';
import { AuditLogComponent } from './Views/audit-log/audit-log.component';
import { ArchiveComponent } from './Views/archive/archive.component';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProjectService } from './Services/project-service.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProjectFuncComponent } from './views/project-func/project-func.component';
import { AccountComponent } from './views/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TaskInfoComponent } from './components/task-info/task-info.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import { KanbanCardComponent } from './components/common/kanban-card/kanban-card.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ListFuncElemComponent } from './components/common/list-func-elem/list-func-elem.component';
import { TaskListElemComponent } from './components/common/task-list-elem/task-list-elem.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarNavComponent,
    HomeScreenComponent,
    YourProjectsViewComponent,
    ProjectHomeComponent,
    ProjectMembersComponent,
    AuditLogComponent,
    ArchiveComponent,
    AddProjectFormComponent,
    AddTaskFormComponent,
    AddFunctionalityFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    KanbanBoardComponent,
    ProjectsComponent,
    ProjectFuncComponent,
    AccountComponent,
    TaskInfoComponent,
    KanbanCardComponent,
    LoginComponent,
    RegisterComponent,
    ListFuncElemComponent,
    TaskListElemComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextFieldModule,
    MatCardModule
 
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
