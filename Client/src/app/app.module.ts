import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
 
import { AppRoutingModule } from './app-routing.module';

//Components
 
import { AppComponent }         from './Components/AppComponent/app.component';

import { AssignTaskComponent }   from './Components/AssignTaskComponent/assign-task.component';
import { AllDetailsComponent }      from './Components/AllDetailsComponent/all-details.component';
import { NotificationComponent }       from './Components/NotificationComponent/notification.component';
import { UserSearchComponent }  from './Components/UserSearchComponent/user-search.component';
import { LoginComponent }       from './Components/LoginComponent/login.component';
import { DashboardComponent }       from './Components/DashboardComponent/dashboard.component';
import { TaskListComponent }       from './Components/TaskListComponent/task-list.component';
import { PersonNameComponent }       from './Components/PersonNameComponent/person-name.component';
import { PersonSelectorComponent }       from './Components/PersonSelectorComponent/person-selector.component';

//Services

import { UserService }          from './Services/UserService/user.service';
import { TaskService }          from './Services/TaskService/task.service';
import { SyncService }          from './Services/SyncService/sync-service.service';
import { AuthService }          from './Services/AuthService/auth-service.service';
import { NotificationService }  from './Services/NotificationService/notification.service';
import { AuthGuard }            from './auth.guard';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    
    AssignTaskComponent,
    UserSearchComponent,
    AllDetailsComponent,
    LoginComponent,
    DashboardComponent,
    TaskListComponent,
    NotificationComponent,
    PersonNameComponent,
    PersonSelectorComponent
  ],
  providers: [ UserService,TaskService,SyncService, AuthService, NotificationService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
