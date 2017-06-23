import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
import { AppComponent }         from './Components/AppComponent/app.component';
import { DashboardComponent }   from './Components/DashboardComponent/dashboard.component';
import { UsersComponent }      from './Components/UsersComponent/users.component';

import { UserSearchComponent }  from './Components/UserSearchComponent/user-search.component';
import { LoginComponent }       from './Components/LoginComponent/login.component';

import { AuthGuard }          from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'users',     component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'usersearch',     component: UserSearchComponent },
  { path: 'myapp',     component: AppComponent },
  { path: 'login',     component: LoginComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
