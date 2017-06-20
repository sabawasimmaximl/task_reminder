import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
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
export class UserSearchComponent implements OnInit {
  userlist: User[];
  user:User;
  selectedUser:User;
  userExists:number=0;
  
  constructor(
    
    private taskService: TaskService,
    private userService: UserService,
    private router: Router) {
    }
 
  // Push a search term into the observable stream.
 
 
  ngOnInit(): void {
    this.userService.getPersonList().then(users => {
      this.userlist = users.json().results; 
      this.user = users.json().results[0];
      console.log("Testing User.json in User-Search component - ",this.user);});


  }
 
  getUserDetail(selectedUserObj:any){
    
    this.selectedUser=selectedUserObj;
    this.userExists=1;
    
    console.log("PRNTING selected User = ", this.selectedUser);
    console.log("PRNTING USER ID VALUE for selected User = ", this.selectedUser.id);
    this.userService.getSingleUser(this.selectedUser.id).then(
      response => {
        this.user = response.results;
        console.log("Response = ",this.user);
      }
    )
 }

}
 

