import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

//Classes
import { User }         from '../../Class/user';

//Services
import { UserService }  from '../../Services/UserService/user.service';


@Component({
    selector:'task-list',
    templateUrl:'./task-list.component.html'
})

export class TaskListComponent implements OnInit {

    
  users: User[]=[];
  

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getAllDetails();
  }

  getAllDetails(): void {
    this.userService.getAllDetails()
    .subscribe(users => {this.users = users;
      console.log("Printing Get All Details in users component - ",users)});

  }

}
