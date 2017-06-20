import {Router} from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

//Components
import { DashboardComponent }   from '../../Components/DashboardComponent/dashboard.component';
import { LoginComponent }   from '../../Components/LoginComponent/login.component';

//Services

import { UserService }          from '../../Services/UserService/user.service';
import { TaskService }          from '../../Services/TaskService/task.service';
// import { AuthService }          from '../../Services/AuthService/auth-service.service';



//Classes
import { User } from '../../Class/user';


@Injectable()
export class SyncService {

    private token:string;
  private headers = new Headers(
    {'Content-Type': 'application/json'});

  
  constructor(private http:Http,private router:Router){
      
      this.token=localStorage.getItem('auth_token');
        
      if(this.token) {
          this.headers.append('Authorization', 'Bearer ' + this.token);
          console.log("TOKEN EXISTS----------");
          console.log(this.headers);
          console.log("Navigating to users----------");
          this.router.navigate(['dashboard'])
      }
        else{
          console.log("TOKEN DOES NOT EXIST");
           console.log("Navigating to users----------");
          this.router.navigate(['login'])
        }
  }

  public handleError(error: any): Promise<any> {
  console.error('An error has occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);  
  }


  
  
  retrieve(url:string,operation:string){

    console.log("Operation = ", operation);
    if(this.token)
    return this.http.get(url,this.token).toPromise();
    else{
          console.log("TOKEN DOES NOT EXIST");
          
        }
  
}

  assigntask(createTaskUrl:string,title:string,person:number,operation:string){
    
    console.log("Operation = ", operation);
    if(this.token)
    return this.http.post(createTaskUrl, JSON.stringify({title,person}), {headers: this.headers})
                    .toPromise();
    else{
          console.log("TOKEN DOES NOT EXIST");
          
        }                

  }

  getSingleUser(url:string,operation:string){
    console.log("Operation = ", operation);
    if(this.token)
    return this.http.get(url,this.token)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
    else{
          console.log("TOKEN DOES NOT EXIST");  
        }

  }

}
