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
  
  person:User;
  selectedUid:number;
  selectedName:string;
  userExists:number=0;
  
  constructor(
    
    private taskService: TaskService,
    private userService: UserService,
    private router: Router) {
    }
 
  ngOnInit(): void {
    this.userService.getPersonListService().subscribe(users => {
      
      this.userlist = users;
      console.log("USER LIST =",this.userlist); 
      
    });

  }
 
//Receives Output Emitted by the Person-Selector Component
  handleUserUpdated(obj:any){
    console.log("HANDLING USER EVENT HERE ----", obj.user);
    this.selectedUid=obj.id;
    this.selectedName=obj.user.username;
    this.getSingleUserDetail();
  }

  getSingleUserDetail(){
    
    this.userExists=1;
    console.log("GetSingleUserDetail Function in User-Search Component");
    console.log("PRNTING selected User Id = ", this.selectedUid);
    this.userService.getSingleUser(this.selectedUid).subscribe(
      response => {
        this.person = response;
        console.log("Response = ",this.person);
      }
    )
 }

}
 

