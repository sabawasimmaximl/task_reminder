import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Classes
import { User }         from '../../Class/user';

//Services
import { UserService }  from '../../Services/UserService/user.service';
import { TaskService }  from '../../Services/TaskService/task.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ],
  providers:[UserService,TaskService]
})
export class UsersComponent implements OnInit {

  users: User[]=[];
  
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService,private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllDetails();
  }

  getAllDetails(): void {
    this.userService.getAllDetails()
    .subscribe(users => {this.users = users.results;
      console.log("Printing Get All Details in users component - ",users)});

  }


}
