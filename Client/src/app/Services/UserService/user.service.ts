import { DashboardComponent }   from '../../Components/DashboardComponent/dashboard.component';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

//Services
import { SyncService }          from '../../Services/SyncService/sync-service.service';

//Classes
import { User } from '../../Class/user';

@Injectable()
export class UserService {
  
  operation:string;
  private usersUrl = 'http://localhost:8000/api/task/list';
  private getPersonListUrl = 'http://localhost:8000/api/person/list/';


  constructor(private http:Http,private syncService:SyncService){}

//Error Handling function
  public handleError(error: any): Promise<any> {
  console.error('An error has occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


//  Getting One User
  getHero(id: number): Promise<User> {
  const url = `${this.usersUrl}/${id}`;
  console.log("Id = "+ id);
  console.log("Get User called");
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as User)
    .catch(this.handleError);
  }


//List Of User Id's to display on Assign a Task page.
  getPersonList(){
    this.operation="getPersonList";
    return this.syncService.retrieve(this.getPersonListUrl,this.operation); 

  }

//Getting All details to call on View Details Page.
  getAllDetails(){
    this.operation="getPersonList";
    return this.syncService.retrieve(this.usersUrl,this.operation); 

  }


//   delete(id: number): Promise<void> {
//   const url = `${this.usersUrl}/${id}`;
//   return this.http.delete(url, {headers: this.headers})
//     .toPromise()
//     .then(() => null)
//     .catch(this.handleError);
// }

}
