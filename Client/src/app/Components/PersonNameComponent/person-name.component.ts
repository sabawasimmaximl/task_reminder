import {Component} from '@angular/core';

//Services
import { UserService }          from '../../Services/UserService/user.service';


@Component({

    selector:'person-name',
    templateUrl:'./person-name.component.html'

})

export class PersonNameComponent{

constructor(userService:UserService)
{
}


getUserName(id:Number){
}


}