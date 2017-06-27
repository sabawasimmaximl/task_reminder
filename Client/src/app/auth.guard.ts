import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { AuthService }          from './Services/AuthService/auth-service.service';

@Injectable() 
export class AuthGuard implements CanActivate{


    constructor(private authService:AuthService, private router:Router)
    { }

    canActivate():boolean{
        
        if(this.authService.isLoggedIn())
        {   console.log("CAN ACTIVATE FUNCTION IF CALLED");
            this.router.navigate['/assigntask'];
            return true;
        }
        else
        {
         console.log("CAN ACTIVATE FUNCTION ELSE CALLED");
 
         return false;

        }
        
        }

}