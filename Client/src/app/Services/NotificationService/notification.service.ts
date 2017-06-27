import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';



//Services
import { SyncService }          from '../../Services/SyncService/sync-service.service';

//Classes
import { User } from '../../Class/user';


@Injectable()
export class NotificationService {
    
    private notifArraySource = new Subject<any>();    
    notifArray$: any;
    //WebSocket Code
    private ws:any = new WebSocket('ws://localhost:8000/ws/notifications?subscribe-broadcast');

    constructor( private syncService:SyncService){

        this.notifArray$ = this.notifArraySource.asObservable();
        setInterval((x: any) => {this.getNotifArray()}, 5000);


        this.ws.onopen = function() {
            console.log("websocket connected");
        };
        this.ws.onmessage = function(e:any) {
            console.log("Received: " + e.data);
            alert(e.data);
        };
        this.ws.onerror = function(e:any) {
            console.error(e);
        };
        this.ws.onclose = function(e:any) {
            console.log("connection closed");
        }
    }

    getNotifArray(){
            this.syncService.get("","Get Notification Array").subscribe(
                (result:any) => {

                    this.notifArraySource.next(result);

                }
            )
    }
 

    returnNotifArrayObs():Observable<any>{
        this.notifArray$ = this.notifArraySource.asObservable();
        return this.notifArray$;
    }



}