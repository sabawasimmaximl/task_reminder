import {Component} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

//Auth Service
import {AuthService} from '../../Services/AuthService/auth-service.service';


@Component({
selector:'login',
templateUrl:'./login.component.html',
providers:[]

})

export class LoginComponent{
test:any;
private headers = new Headers({'Content-type':'application/json'});


constructor(public router:Router, public http:Http,public authService:AuthService)
{

        
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    
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
                this.router.navigate(['/dashboard']);
        } 
        else
        {       
                console.log("Failed login");
                this.router.navigate(['login']);
        }
            }
        );
    
}


// logoutFunc()
//         {
//  this.authService.logout();       
//  console.log("Printing Authorization Token after Logout : ",this.authService.get_authorization_header());
//  this.router.navigate(['login']);
// }



}