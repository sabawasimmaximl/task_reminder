import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { AuthService }          from './Services/AuthService/auth-service.service';

@Injectable() 
export class AuthGuard implements CanActivate{


    constructor(private authService:AuthService,router:Router)
    {

    }

    canActivate():boolean{
        
        let loggedIn = this.authService.get_authorization_header();


        if(loggedIn)
        {
            return true;
        }
        else
        {
            return false;
        }
    
    }


}