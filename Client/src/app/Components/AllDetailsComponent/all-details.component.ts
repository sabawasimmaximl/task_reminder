import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

//Classes
import { User }         from '../../Class/user';

//Services
import { UserService }  from '../../Services/UserService/user.service';
import { TaskService }  from '../../Services/TaskService/task.service';

@Component({
  selector: 'users',
  templateUrl: './all-details.component.html',
  styleUrls: [ './all-details.component.css' ],
  providers:[UserService,TaskService]
})
export class AllDetailsComponent implements OnInit{
  
  tasks: any;
  
  
  constructor(
    private userService: UserService,private taskService: TaskService) { 
    }

  ngOnInit(){
    this.taskService.getAllDetails().subscribe(
      (result: any) => {
        this.tasks = result;
      }
    )
  }


  
}
