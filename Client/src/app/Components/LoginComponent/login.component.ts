import {Component} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
selector:'login',
templateUrl:'./login.component.html',
providers:[]

})

export class LoginComponent{

private headers = new Headers({'Content-type':'application/json'});
private loginUrl = 'http://localhost:8000/api/account/login/';
private registerUrl = 'http://localhost:8000/api/account/register/';

constructor(public router:Router, public http:Http){}

loginFunc(username:string,password:string)
        {
        this.http.post(this.loginUrl,JSON.stringify({username,password}),this.headers)
        .subscribe(
            response => {
                localStorage.setItem('token',response.json().token_value);
                    this.router.navigate(['dashboard']);
                    },

            error => {
                alert(error.text());
                console.log(error.text());
                }

                )
        }

registerFunc(username:string,password:string)
        {
        this.http.post(this.registerUrl,JSON.stringify({username,password}),this.headers)
                .subscribe(
                    response => {
                        console.log("Status : ",response.json());
                    }
                )
                
        }

}