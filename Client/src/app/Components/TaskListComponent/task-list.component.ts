import {Input, Component,OnInit,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'task-list',
    templateUrl:'./task-list.component.html'
})



export class TaskListComponent{

  @Input()
  tasklist: any;

}
