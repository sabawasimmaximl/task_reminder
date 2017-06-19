import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

//Classes
import { User }           from '../../Class/user';
 
@Injectable()
export class UserSearchService {
 
  constructor(private http: Http) {}
 
  search(term: string): Observable<User[]> {
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map(response => response.json().data as User[]);
  }
}
