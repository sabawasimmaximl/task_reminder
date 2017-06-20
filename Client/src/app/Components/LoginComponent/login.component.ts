import {Component} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
selector:'login',
templateUrl:'./login.component.html',
providers:[]

})

export class LoginComponent{
test:any;
private headers = new Headers({'Content-type':'application/json'});
private loginUrl = 'http://localhost:8000/api/account/login/';

constructor(public router:Router, public http:Http){}

loginFunc(username:string,password:string)
        {
        this.http.post(this.loginUrl,{username,password},this.headers)
        .toPromise().then(response => 
        {console.log("Backend data = " , response.json().token[0].pk);

        localStorage.setItem('auth_token',response.json().token[0].pk);

        console.log("Auth Token = " , localStorage.getItem('auth_token'));

        this.router.navigate(['dashboard']);

} )


        }

}