import {Input, Component,OnInit,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

//Classes
import { User }         from '../../Class/user';

//Services
import { UserService }  from '../../Services/UserService/user.service';
import { TaskService }  from '../../Services/TaskService/task.service';


@Component({
    selector:'task-list',
    templateUrl:'./task-list.component.html'
})



export class TaskListComponent implements OnInit{

  @Input()
  tasklist: any;
  

  constructor(
    private router: Router,
    private userService: UserService,private taskService: TaskService) {

    }

ngOnInit(){
    return;
}
  

}
