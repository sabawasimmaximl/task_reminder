import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls:['./menu.component.css'],
  providers:[UsersService]
})
export class MenuComponent {
  title:string;
  users; 
 reminder_time:string; 


constructor(usersService:UsersService)
{
this.users = usersService.getUsers();
}

}
