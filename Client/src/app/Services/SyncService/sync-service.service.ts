
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

//Components
import { DashboardComponent }   from '../../Components/DashboardComponent/dashboard.component';
import { LoginComponent }   from '../../Components/LoginComponent/login.component';

//Services

import { UserService }          from '../../Services/UserService/user.service';
import { UserSearchService }    from '../../Services/UserSearchService/user-search.service';
import { TaskService }          from '../../Services/TaskService/task.service';
// import { AuthService }          from '../../Services/AuthService/auth-service.service';



//Classes
import { User } from '../../Class/user';


@Injectable()
export class SyncService {

    
  private headers = new Headers({'Content-Type': 'application/json'});

  
  constructor(private http:Http){
  }

  public handleError(error: any): Promise<any> {
  console.error('An error has occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);  
  }


  
  
  retrieve(url:string,operation:string){

    console.log("Operation = ", operation);
    return this.http.get(url).toPromise();
  
}

  assigntask(createTaskUrl:string,title:string,person:number,operation:string){
    
    console.log("Operation = ", operation);
    
    return this.http.post(createTaskUrl, JSON.stringify({title,person}), {headers: this.headers})
                    .toPromise();

  }

  getSingleUser(url:string,operation:string){
    console.log("Operation = ", operation);

  return this.http.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

}
