
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
//Components
import { DashboardComponent }   from '../../Components/DashboardComponent/dashboard.component';

//Services
import { SyncService }          from '../../Services/SyncService/sync-service.service';

//Classes
import { User } from '../../Class/user';


@Injectable()
export class TaskService {

  operation:string;
  

  constructor(private http:Http, private syncService:SyncService){}



  addTask(taskname: string,uid:number){

        this.operation="AssignTaskOperation";
    return  this.syncService.post("task/create/", {"title": taskname, "person": uid},this.operation);


  }
}
