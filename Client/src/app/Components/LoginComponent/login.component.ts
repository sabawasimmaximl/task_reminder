import {Component, OnInit} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

//Auth Service
import {AuthService} from '../../Services/AuthService/auth-service.service';


@Component({
selector:'login',
templateUrl:'./login.component.html',
providers:[]

})

export class LoginComponent implements OnInit{
test:any;
private headers = new Headers({'Content-type':'application/json'});


constructor(public router:Router, public http:Http,public authService:AuthService)
{        
}

ngOnInit(){
  if(this.authService.get_authorization_header())
        {       
                console.log("Succeded login");
                this.router.navigate(['/assigntask']);
                this.authService.sendLoginCheck(true);

        } 
        else
        {       console.log("No User logged in");
                this.router.navigate(['/login']);
                this.authService.sendLoginCheck(false);
        }

}

loginFunc(username:string,password:string)
        {
        console.log("Calling AuthService Login");
        
        console.log("Printing Authorization Token Before Login : ",this.authService.get_authorization_header());

        this.authService.login(username, password).subscribe(
            data => {
                console.log("Subscribed data = ",data);
                if(this.authService.get_authorization_header())
                {       
					console.log("Succeded login");
					this.router.navigate(['/assigntask']);
					this.authService.sendLoginCheck(true);
                } 
                else
                {       
					console.log("Failed login");
					this.router.navigate(['/login']);
					this.authService.sendLoginCheck(false);

                }
            }
        );
    
}

}