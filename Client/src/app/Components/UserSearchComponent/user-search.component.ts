import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
//Services
import { UserService }          from '../../Services/UserService/user.service';
import { TaskService }          from '../../Services/TaskService/task.service';
 
//Classes
import {User} from '../../Class/user';



@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: [ './user-search.component.css' ],
  providers: [UserService,TaskService]
})
export class UserSearchComponent {
  
  person:User;
  selectedUid:number;
  tasks:any;
  task_exists:number=0;

  constructor(
  
    private taskService: TaskService) {
    }

 
 
//Receives Output Emitted by the Person-Selector Component
  handleUserUpdated(obj:any){
    console.log("HANDLING USER EVENT HERE in User Search----", obj.user);
    this.selectedUid=obj.id;
  
    this.taskService.getSpecificTaskDetails(this.selectedUid).subscribe(
      response => {
        this.tasks = response;
        console.log("Response = ",this.tasks);
        if(this.tasks) {
          this.task_exists = 1; 
      }
        else {
          this.task_exists = 0; 
      }
    }
    );

  }



}
 

