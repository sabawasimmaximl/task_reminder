"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:8000/api/task/list';
        this.getPersonListUrl = 'http://localhost:8000/api/person/list/';
        //Updating Hero data
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    //Error Handling function
    HeroService.prototype.handleError = function (error) {
        console.error('An error has occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    //Getting One Hero
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        console.log("Id = " + id);
        console.log("Get Hero called");
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //Getting All heroes
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl).toPromise();
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    //   //Assigning task to a user  
    //   assign(hero:Hero): Promise<Hero> {
    //     //Printing out Data Acquired
    //     console.log("Assign function called");
    //     console.log("Id = " + hero.id);
    //     console.log("Name = " + hero.person);
    //     for(let i=0;i<hero.task.length;i++)
    //     {
    //     console.log("New Task Name = " + hero.task[i].tname);
    //     console.log("New Task Doer = " + hero.task[i].tdoer);
    //     }
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     console.log("URL = " + url);
    //     return this.http
    //     .post(url, JSON.stringify(hero), {headers: this.headers})
    //     .toPromise()
    //     .then(()=>hero)
    //     .catch(this.handleError);
    // }
    HeroService.prototype.createName = function (uname, tname, uid) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: uname, tasks: tname, id: uid }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map