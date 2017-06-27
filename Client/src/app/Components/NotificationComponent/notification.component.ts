import { Component, OnInit, Output,EventEmitter } from '@angular/core';

//Classes
import { User }         from '../../Class/user';

//Services
import { NotificationService }  from '../../Services/NotificationService/notification.service';


@Component({
  selector: 'notif',
  templateUrl: './notification.component.html',
  styleUrls:['./notification.component.css'],
  
})



export class NotificationComponent implements OnInit{

constructor(private notificationService:NotificationService){}

notifArray:any;

ngOnInit(){
  this.returnNotificationArray();
}

returnNotificationArray(){

    //Calls function in Notification Service;
   this.notificationService.returnNotifArrayObs().subscribe(
     (result:any) => {
       this.notifArray = result;
       console.log("Getting Notification Array in Notif Component = ", this.notifArray);
     }
   )

}



}