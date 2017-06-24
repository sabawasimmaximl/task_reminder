import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
 

//Services
import { UserService }          from '../../Services/UserService/user.service';

 
//Classes
import {User} from '../../Class/user';



@Component({
  selector: 'person-selector',
  templateUrl: './person-selector.component.html',
  providers: [UserService]
})

export class PersonSelectorComponent implements OnInit {
  
  userlist: User[];
  personSelected:User;
  @Output() personSelectedEmit = new EventEmitter();

  constructor(
    
    private userService: UserService,
    ) {
    }
 
  ngOnInit():void {
    this.userService.getPersonListService()
    .subscribe(users => { 
      this.userlist = users;
      console.log("USER LIST in Person Selector = ",this.userlist); 
      
    });

    }
    
    onSelect(user: User): void {
        this.personSelected = user;
        console.log("Selected Person = ", this.personSelected );
        this.personSelectedEmit.emit(this.personSelected);
        
    }


}
 

