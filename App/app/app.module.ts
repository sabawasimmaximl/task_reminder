import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {MenuComponent } from './menu.component';
import { LoginComponent } from './login.component';

import { UsersService} from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
      },
      {
        path:'menu',
        component:MenuComponent
      },
      {
        path:'login',
        component:LoginComponent
      }
    ])
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
