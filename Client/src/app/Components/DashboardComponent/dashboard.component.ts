import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

//Services
import { UserService }          from '../../Services/UserService/user.service';
import { TaskService }          from '../../Services/TaskService/task.service';

//Classes
import { User } from '../../Class/user';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers:[UserService,TaskService]
})

export class DashboardComponent implements OnInit {
    
    user:User;

    users: User[];

   userlist:User[];
   assignMsg:String;

   private getUsersUrl = 'http://localhost:8000/api/task/person/';
   private getPersonListUrl = 'http://localhost:8000/api/person/list/';
   private createTaskUrl = 'http://localhost:8000/api/task/create/';
   private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private router: Router,
    private userService: UserService,
    private taskService: TaskService,
     private http:Http,
     private route: ActivatedRoute,
     private location: Location) { }


  ngOnInit(): void {
    
    this.getPersonList(); //returns list of users
  }

  getPersonList() {
      this.userService.getPersonList()
      .then(users => {this.userlist = users.json();
      console.log("Testing userList in Task component - ",this.userlist);
      console.log("Testing User.json in Task component - ",users.json());});

  }


  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }

  
  addtask(taskname: string,uid:number){
  
    this.taskService.addTask(taskname,uid).then(()=>this.assignMsg="Success");
    
        }
}
