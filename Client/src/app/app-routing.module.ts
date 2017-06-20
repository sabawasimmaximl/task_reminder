import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
import { AppComponent }         from './Components/AppComponent/app.component';
import { DashboardComponent }   from './Components/DashboardComponent/dashboard.component';
import { UsersComponent }      from './Components/UsersComponent/users.component';
import { UserDetailComponent }  from './Components/UserDetailComponent/user-detail.component';
import { UserSearchComponent }  from './Components/UserSearchComponent/user-search.component';
import { LoginComponent }       from './Components/LoginComponent/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'myapp',     component: AppComponent },
  { path: 'login',     component: LoginComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
