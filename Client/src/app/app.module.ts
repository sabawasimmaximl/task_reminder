import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
 
import { AppRoutingModule } from './app-routing.module';

//Components
 
import { AppComponent }         from './Components/AppComponent/app.component';
import { DashboardComponent }   from './Components/DashboardComponent/dashboard.component';
import { UsersComponent }      from './Components/UsersComponent/users.component';
import { NotificationComponent }       from './Components/NotificationComponent/notification.component';
import { UserSearchComponent }  from './Components/UserSearchComponent/user-search.component';
import { LoginComponent }       from './Components/LoginComponent/login.component';
import { PersonSelectorComponent }       from './Components/PersonSelectorComponent/person-selector.component';

//Services

import { UserService }          from './Services/UserService/user.service';
import { TaskService }          from './Services/TaskService/task.service';
import { SyncService }          from './Services/SyncService/sync-service.service';
import { AuthService }          from './Services/AuthService/auth-service.service';
import { AuthGuard }          from './auth.guard';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserSearchComponent,
    UsersComponent,
    LoginComponent,
    NotificationComponent,
    PersonSelectorComponent
  ],
  providers: [ UserService,TaskService,SyncService, AuthService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
