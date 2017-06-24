import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
import { AppComponent }         from './Components/AppComponent/app.component';

import { AssignTaskComponent }   from './Components/AssignTaskComponent/assign-task.component';
import { AllDetailsComponent }      from './Components/AllDetailsComponent/all-details.component';

import { UserSearchComponent }  from './Components/UserSearchComponent/user-search.component';
import { LoginComponent }       from './Components/LoginComponent/login.component';

import { AuthGuard }          from './auth.guard';

const routes: Routes = [
  { path: './', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'assigntask',  component: AssignTaskComponent, canActivate: [AuthGuard] },
  { path: 'alldetails',     component: AllDetailsComponent, canActivate: [AuthGuard]},
  { path: 'usersearch',     component: UserSearchComponent, canActivate: [AuthGuard]},
  { path: 'myapp',     component: AppComponent},
  { path: 'login',     component: LoginComponent},
  {path: "**",       component: LoginComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
