import { DashboardComponent }   from '../../Components/DashboardComponent/dashboard.component';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//Services
import { SyncService }          from '../../Services/SyncService/sync-service.service';

//Classes
import { User } from '../../Class/user';
import { BaseUrl } from '../../Class/baseUrl';

@Injectable()
export class UserService {
  
  operation:string;
  

  constructor(private http:Http,private syncService:SyncService){}

//Error Handling function
  public handleError(error: any): Promise<any> {
  console.error('An error has occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


//  Getting One User
  getSingleUser(id:number){
  this.operation="GetOneUser";
  console.log("ID in GetSingleUser ----- ",id);
  return this.syncService.get("task/?person="+id,this.operation);
  
  }


//List Of User Id's to display on Assign a Task page.
  getPersonListService(){
    this.operation="getPersonList";
    return this.syncService.get("persons/",this.operation);
    

  }

//Getting All details to call on View Details Page.
  getAllDetails(){
    this.operation="getPersonList";
    return this.syncService.get("task/list/",this.operation);

  }


}
