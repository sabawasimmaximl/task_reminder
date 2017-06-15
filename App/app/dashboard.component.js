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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var hero_service_1 = require("./hero.service");
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService, http, route, location) {
        this.router = router;
        this.heroService = heroService;
        this.http = http;
        this.route = route;
        this.location = location;
        this.heroesUrl = 'api/heroes';
    }
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    DashboardComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DashboardComponent.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.add = function (taskname, uid) {
        //saving scope of this in a
        var a = this;
        taskname = taskname.trim();
        this.heroService.getHero(uid)
            .then(function (data) {
            console.log("data", data);
            console.log("task", data.task[0]);
            //pushing string
            data.task[0].tname.push(taskname);
            console.log("Data pushed = " + data.task);
            //calling assign function
            a.heroService.assign(data)
                .then(function () { return a.location.back(); });
            "";
        });
        // this.heroService.assign(data)
        // .then(() => this.location.back());
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService,
        http_1.Http,
        router_2.ActivatedRoute,
        common_1.Location])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map