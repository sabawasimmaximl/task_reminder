import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

//Component
// import { LoginComponent }          from '../../Components/LoginComponent/login.component';

//Services
import { UserService }          from '../../Services/UserService/user.service';
import { TaskService }          from '../../Services/TaskService/task.service';
import { AuthService }          from '../../Services/AuthService/auth-service.service';

//Classes
import { User } from '../../Class/user';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers:[UserService,TaskService]
  
})

export class DashboardComponent implements OnInit {
    
   userlist:User[];
   assignMsg:number=0;
   username:string;

  constructor(
    // private loginComp:LoginComponent,
    private router: Router,
    private userService: UserService,
    private taskService: TaskService,
    private authService:AuthService,
     private http:Http,
     private route: ActivatedRoute,
     private location: Location)
     
      {
          console.log("Getting Username");
          this.username=localStorage.getItem('username');
          console.log("Printing Username in Dashboard Component",this.username)

      }


  ngOnInit(): void {
    
    this.getPersonList(); //returns list of users
  }

  getPersonList() {
   
      this.userService.getPersonListService()
      .subscribe(users => {this.userlist = users.results; 
      console.log("Testing userList in Task component - ",this.userlist);
      console.log("Testing User.json in Task component - ",users);},
       (err:any) => console.log("ERROR = ",err)
      );

  }


  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }

  logout()
  {  this.authService.logout();       
     console.log("Printing Authorization Token after Logout : ",this.authService.get_authorization_header());
    this.router.navigate(['login']);
  }
  
  addtask(taskname: string,uid:number){
    this.taskService.addTask(taskname,uid).subscribe(
      (response:any) => {
        console.log("hello");
        this.assignMsg=1;
      }
    );
  }
}
