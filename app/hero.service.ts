import { Hero } from './hero';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  

  constructor(private http:Http){}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  console.log("Id = "+ id);
  console.log("Get Hero called");
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Hero): Promise<Hero> {
  const url = `${this.heroesUrl}/${hero.id}`;
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
  }
  

  
  assign(hero:Hero): Promise<Hero> {
    
    //Printing out Data Acquired
    console.log("Assign function called");
    console.log("Id = " + hero.id);
    console.log("Name = " + hero.name);

    for(let i=0;i<hero.task.length;i++)
    {
    console.log("New Task Name = " + hero.task[i].tname);
    console.log("New Task Doer = " + hero.task[i].tdoer);
    }

    const url = `${this.heroesUrl}/${hero.id}`;
    console.log("URL = " + url);

    return this.http
    .post(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(()=>hero)
    .catch(this.handleError);

}

  createName(uname: string,tname:string[],uid:number): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name:uname,tasks: tname,id:uid}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Hero)
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

}
