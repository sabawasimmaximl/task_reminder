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

  showDash:any;
  constructor(private authService:AuthService){
    
    this.authService.getLoginCheck()
    .subscribe((message:any) =>
      { this.showDash=message;
        console.log("Message Received in Dashboard (True=loggedIn, False = loggedOut) : ",this.showDash );
      })
  }



  }
