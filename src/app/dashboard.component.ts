import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';

import { HeroService } from './hero.service';
import { TaskService } from './task.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers:[HeroService,TaskService]
})

export class DashboardComponent implements OnInit {
    hero:Hero;
   
   heroes: Hero[];
   
   userlist:Hero[];
   assignMsg:any;
   private heroesUrl = 'http://localhost:8000/api/task/create/';
   private getPersonListUrl = 'http://localhost:8000/api/person/list/';
   private createTaskUrl = 'http://localhost:8000/api/task/create/';
   private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(
    private router: Router,
    private heroService: HeroService,
    private taskService: TaskService,
     private http:Http,
     private route: ActivatedRoute,
     private location: Location) { }

  getHeroes(): void {
      this.heroService.getHeroes()
    .then(heroes => {this.heroes = heroes.json().results; 
      console.log("Testing 123 in heroes component - ",heroes.json())});
  
  }

    getPersonList(): void {
      this.taskService.getPersonList()
    .then(heroes => {this.userlist = heroes.json(); 
      console.log("Testing userList in Task component - ",this.userlist);
      console.log("Testing Hero.json in Task component - ",heroes.json());});
  
  }


  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  getHero(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
  }

  ngOnInit(): void {
    // this.getHeroes(); //returns task list
    this.getPersonList(); //returns list of users
  }

  addtask(taskname: string,uid:number): Promise<any> {
    //saving scope of this in a
        // var a = this;
        // taskname = taskname.trim();

        // this.heroService.getHero(uid)
        // .then(function(data) {
        // console.log("User returned = " + data);
        // console.log("task list of user = " + data.person);
        // console.log("new taskname = " + taskname);
        // console.log("Assigned to user id = " + uid);
        // //pushing string

        // data.task.push({tdoer:uid,tname:taskname}); 

        // let len = data.task.length;
        // console.log("Lenngth = "+ len);
        // console.log("Data = "+ data.task[1].tdoer + data.task[1].tname ); 
        //calling assign function
      
      
        // a.heroService.assign(data)
        // .then(() => a.location.back());
        // ``
        // });
        
        let title = taskname, person = uid;
        let obj:any={
          "title":taskname,
          "person":uid
          
        }
        

    return this.http
    .post(this.createTaskUrl, obj, {headers: this.headers})
    .toPromise()
    .then(response=>{ this.assignMsg = response.json(); ; console.log("Json response after adding :- ", response.json())})
    .catch(this.heroService.handleError);

        }
}
