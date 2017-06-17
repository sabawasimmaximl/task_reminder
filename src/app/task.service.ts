import { Hero } from './hero';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HeroService} from './hero.service';
import 'rxjs/add/operator/toPromise';
import {DashboardComponent} from './dashboard.component';

@Injectable()
export class TaskService {

  
  private getPersonListUrl = 'http://localhost:8000/api/person/list/';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http, private heroService:HeroService){}
//Error Handling function

  getPersonList(){
              
    return this.http.get(this.getPersonListUrl).toPromise();
          
  }

}
