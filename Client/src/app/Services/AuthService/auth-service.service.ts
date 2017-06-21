
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//Components

//Services
import { SyncService }          from '../../Services/SyncService/sync-service.service';


//Classes
import { User } from '../../Class/user';
import {BaseUrl} from '../../Class/baseUrl';

@Injectable()
export class AuthService {

  private loginUrl = BaseUrl.baseurl + 'account/login/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http){}

  
  login(username: string, password: string):Observable<any>  { 
  
     console.log("Calling Login on Auth Service");
     return this.http.post(this.loginUrl,{username,password},this.headers)
        .map((response:any) => 
                {
                  console.log("Backend data received = " , response.json());
                  console.log("UserName received = " , response.json().username);
                  localStorage.setItem('auth_token',response.json().token[0].pk);
                  localStorage.setItem('username',response.json().username);
                  console.log("Auth Token (AuthService) = " , localStorage.getItem('auth_token'));
                  return response.json();
             });
  }

  logout()
  {
    console.log("Calling LogOut on Auth Service");
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    console.log("Removing Token, Auth Token value now =",localStorage.getItem('auth_token'));
    console.log("Removing Token, Username value now =",localStorage.getItem('username'));
  }

  get_authorization_header(){
    console.log("Calling Get Authorization Header on Auth Service");
   return localStorage.getItem('auth_token'); 
  }

}
