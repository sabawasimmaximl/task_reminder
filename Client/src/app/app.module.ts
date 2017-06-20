import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
 
import { AppRoutingModule } from './app-routing.module';

//Components
 
import { AppComponent }         from './Components/AppComponent/app.component';
import { DashboardComponent }   from './Components/DashboardComponent/dashboard.component';
import { UsersComponent }      from './Components/UsersComponent/users.component';

import { UserSearchComponent }  from './Components/UserSearchComponent/user-search.component';
import { LoginComponent }       from './Components/LoginComponent/login.component';

//Services

import { UserService }          from './Services/UserService/user.service';

import { TaskService }          from './Services/TaskService/task.service';
import { SyncService }          from './Services/SyncService/sync-service.service';
import { AuthService }          from './Services/AuthService/auth-service.service';



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
    LoginComponent
  ],
  providers: [ UserService,TaskService,SyncService, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
