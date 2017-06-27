import {Component, Input, OnChanges} from '@angular/core';

//Services
import { UserService }          from '../../Services/UserService/user.service';


@Component({

    selector:'person-name',
    templateUrl:'./person-name.component.html',
    providers:[UserService]

})

export class PersonNameComponent implements OnChanges{
    username:any;
    
    @Input() personId:any;

constructor(private userService:UserService)
{
}

    ngOnChanges(){
        console.log("User ID Mila", this.personId);
    
    this.userService.getSingleUser(this.personId).subscribe(
      (response:any) => {
        this.username = response.username;
        console.log("Response = ",this.username);
      });

    
}


}