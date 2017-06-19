
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
//Components
import { DashboardComponent }   from '../../Components/DashboardComponent/dashboard.component';

//Services
import { UserService }          from '../../Services/UserService/user.service';


//Classes
import { User } from '../../Class/user';


@Injectable()
export class AuthService {


  private getPersonListUrl = 'http://localhost:8000/api/person/list/';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http, private userService:UserService){}
//Error Handling function

  getPersonList(){

    return this.http.get(this.getPersonListUrl).toPromise();

  }

}
