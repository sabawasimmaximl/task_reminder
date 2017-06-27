import {Router} from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';



import 'rxjs/add/operator/toPromise';

//Components
import { AssignTaskComponent }   from '../../Components/AssignTaskComponent/assign-task.component';
import { LoginComponent }   from '../../Components/LoginComponent/login.component';

//Services

import { AuthService }          from '../../Services/AuthService/auth-service.service';
import { AuthGuard }          from '../../auth.guard';


//Classes
import { User } from '../../Class/user';
import {BaseUrl} from '../../Class/baseUrl';

@Injectable()
export class SyncService{

  private token:string;
  private headers = new Headers(
    {'Content-Type': 'application/json'});
    
  
  
  constructor(private http:Http,
              public router:Router,
              public authService:AuthService,
              public authGuard:AuthGuard)
              {
              console.log("Storing Auth Token in Sync Service");
              this.token=authService.get_authorization_header();
              }


  public handleError(error: any): Promise<any> {
  console.error('An error has occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);  
  }


get(endpoint: string,operation:string){

  if(this.authGuard.canActivate())
  {
    console.log("Calling HTTP GET- SyncService");
    console.log("Operation = ", operation);

    let url=BaseUrl.baseurl+endpoint;

    //appending headers
    this.headers.append('Authorization',this.token);
    return this.http.get(url,this.headers).map(
    (response:any) => {
      return response.json();
    }
    );
    
  }
  else
  {
    console.log("Please Login (GET Fn - SyncService)");
    alert("Please Login");
           this.router.navigate['/login'];  
  }
}

post(endpoint: string, data: any,operation:string)
{
    if(this.authGuard.canActivate())
    {  
        console.log("Calling HTTP POST - SyncService");
        console.log("Operation = ", operation);

        let url=BaseUrl.baseurl+endpoint;
        
        //appending headers
        this.headers.append('Authorization',this.token);
        console.log("Data Sent in Post Request= ",data);
        console.log("URL in Post Request= ",url);
        return this.http.post(url,data,this.headers);

    }
    else
    {
        console.log("Please Login (POST Fn - SyncService)");
        alert("Please Login");
                this.router.navigate['/login'];  
         
    }

}

}
