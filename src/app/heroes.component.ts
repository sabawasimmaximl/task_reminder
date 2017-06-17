import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
   
  // hero1:Hero ={
  //   id:1,
  //   person:'riths',
  //   title:'Task Name 1'
  // };

  // hero2:Hero ={
  //   id:2,
  //   person:'ajith',
  //   title:'Task Name 2'
  // };

  heroes: Hero[]=[];
  // heroes1: Hero[]=[this.hero1,this.hero2];
  selectedHero: Hero;




  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
    .then(heroes => {this.heroes = heroes.json().results; 
      console.log("Testing 123 in heroes component - ",heroes.json())});
  

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  addName(uname: string,tname:string[],id:number): void { 
  uname = uname.trim();

  console.log(uname + " " + tname + " " + id);

  this.heroService.createName(uname,tname,id)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });   
  }
  
  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}

}
