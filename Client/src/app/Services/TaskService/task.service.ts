
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


  
   private getUsersUrl = 'http://localhost:8000/api/task/person/';
   private getPersonListUrl = 'http://localhost:8000/api/person/list/';
   private createTaskUrl = 'http://localhost:8000/api/task/create/';
   

  operation:string;
  assignMsg:string;

  constructor(private http:Http, private syncService:SyncService){}



  addTask(taskname: string,uid:number){
        let title = taskname, person = uid;
        this.operation="AssignTaskOperation";
    return  this.syncService.assigntask(this.createTaskUrl,title,person,this.operation);

  }

}
