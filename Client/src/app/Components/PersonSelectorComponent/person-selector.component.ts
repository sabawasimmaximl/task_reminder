import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
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
  selector: 'person-selector',
  templateUrl: './person-selector.component.html',
  providers: [UserService,TaskService]
})

export class PersonSelectorComponent implements OnInit {
  
  userlist: User[];
  user:User;
  personSelected:User;
  @Output() personSelectedEmit = new EventEmitter();

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router) {
    }
 
  ngOnInit():void {
    this.userService.getPersonListService()
    .subscribe(users => { 
      this.userlist = users;
      console.log("USER LIST =",this.userlist); 
      
    });

    }
    
    onSelect(user: User): void {
        this.personSelected = user;
        console.log("Selected Person = ", this.personSelected );
        this.personSelectedEmit.emit(this.personSelected);
        
    }


}
 

