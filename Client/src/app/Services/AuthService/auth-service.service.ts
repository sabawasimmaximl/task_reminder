
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
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

  private loginUrl = BaseUrl.baseurl + 'auth/token/';
  private headers = new Headers({'Content-Type': 'application/json'});
  private loginCheck = new Subject<any>();

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

  //Logout Function
  logout()
  {
    console.log("Calling LogOut on Auth Service");
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    console.log("Removing Token, Auth Token value now =",localStorage.getItem('auth_token'));
    console.log("Removing Token, Username value now =",localStorage.getItem('username'));
  }

  //Check if User is Logged In Function
  isLoggedIn()
    {
    if(this.get_authorization_header())
      {
      return true; 
      }
    else
      {
      return false; 
      }
    }

    sendLoginCheck(value:any){
      this.loginCheck.next(value);
    }

    getLoginCheck(): Observable<any>
    {
      return this.loginCheck.asObservable();
    }

  //Function to return Authorization Token if it exists  
  get_authorization_header(){
    console.log("Calling Get Authorization Header on Auth Service");
   return localStorage.getItem('auth_token'); 
  }

}
