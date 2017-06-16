import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  hero:Hero;
   heroes: Hero[];
   private heroesUrl = 'api/heroes';

  constructor(
    private router: Router,
    private heroService: HeroService,
     private http:Http,
     private route: ActivatedRoute,
     private location: Location) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
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
    this.getHeroes();
  }


  // addName(uname: string,tname:string[],id:number): void { 
  // uname = uname.trim();

  // console.log(uname + " " + tname + " " + id);

  // this.heroService.createName(uname,tname,id)
  //   .then(hero => {
  //     this.heroes.push(hero);
  //     this.selectedHero = null;
  //   });   
  // }
  
  add(taskname: string,uid:number): void {
    //saving scope of this in a
    var a = this;
  taskname = taskname.trim();
  
  this.heroService.getHero(uid)
  .then(function(data) {
    console.log("User returned = " + data);
    console.log("task list of user = " + data.task);
    console.log("new taskname = " + taskname);
    console.log("Assigned to user id = " + uid);
  //pushing string

  data.task.push({tdoer:uid,tname:taskname}); 

  let len = data.task.length;
console.log("Lenngth = "+ len);
console.log("Data = "+ data.task[1].tdoer + data.task[1].tname ); 
  //calling assign function
  a.heroService.assign(data)
  .then(() => a.location.back());
  ``
});

  // this.heroService.assign(data)
  // .then(() => this.location.back());
  
}

}
