import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


//Services
import { UserService }          from '../../Services/UserService/user.service';
import { TaskService }          from '../../Services/TaskService/task.service';
import { AuthService }          from '../../Services/AuthService/auth-service.service';

//Classes
import { User } from '../../Class/user';


@Component({
  selector: 'dashboard',
  templateUrl: './assign-task.component.html',
  styleUrls: [ './assign-task.component.css' ],
  providers:[UserService,TaskService]
  
})

export class AssignTaskComponent implements OnInit {
    

   assignMsg:number=0;
   username:string;
   selectedUid:number;
  

  constructor(
    // private loginComp:LoginComponent,
    private router: Router,
    private taskService: TaskService,
    private authService:AuthService,
  )
     
      {
          console.log("Getting Username");
          this.username=localStorage.getItem('username');
          console.log("Printing Username in Dashboard Component",this.username)

      }


  ngOnInit(): void {
    
  }

  //Receives Output Emitted by the Person-Selector Component
  handleUserUpdated(obj:any){
    console.log("HANDLING USER EVENT HERE ----", obj.user);
    //Return User object here.
    this.selectedUid=obj.id;

  }

  logout()
  {  this.authService.logout();       
     console.log("Printing Authorization Token after Logout : ",this.authService.get_authorization_header());
    this.router.navigate(['login']);
  }
  
  addtask(taskname: string){
    console.log("User id in addtask = ",this.selectedUid);
    this.taskService.addTask(taskname,this.selectedUid).subscribe(
      (response:any) => {
        console.log("hello");
        this.assignMsg=1;
      }
    );
  }
}
