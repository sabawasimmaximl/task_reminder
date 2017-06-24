import { Component, Input, OnInit,OnChanges } from '@angular/core';

//Classes
import { User }         from '../../Class/user';

//Services
import { AuthService }  from '../../Services/AuthService/auth-service.service';

@Component({
  selector: 'dash',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent{

  constructor(private authService:AuthService){
  }


  }
