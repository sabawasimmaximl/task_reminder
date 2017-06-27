
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
//Components
import { AssignTaskComponent }   from '../../Components/AssignTaskComponent/assign-task.component';

//Services
import { SyncService }          from '../../Services/SyncService/sync-service.service';
import { UserService }          from '../../Services/UserService/user.service';

//Classes
import { User } from '../../Class/user';


@Injectable()
export class TaskService {

  operation:string;
  

  constructor(private http:Http, private syncService:SyncService){

  }



  addTask(taskname: string,uid:number,time:Date){
      this.operation="AssignTaskOperation";
      console.log("Sending Date Time in format = ",time);
      return  this.syncService.post("task/create/", {"title": taskname, "person": uid,"reminder_time": time},this.operation);   
  }

//Get specific Task Details
  getSpecificTaskDetails(id:number){
    this.operation="GetSpecificTaskDetails";
    return this.syncService.get("task/?person="+id,this.operation);
  }

  
//Getting All details to call on View Details Page.
  getAllDetails(){
    this.operation="getPersonList";
    return this.syncService.get("task/list/",this.operation);
  }


}
