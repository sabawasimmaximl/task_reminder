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
var task_service_1 = require("./task.service");
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService, taskService, http, route, location) {
        this.router = router;
        this.heroService = heroService;
        this.taskService = taskService;
        this.http = http;
        this.route = route;
        this.location = location;
        this.heroesUrl = 'http://localhost:8000/api/task/create/';
        this.getPersonListUrl = 'http://localhost:8000/api/person/list/';
        this.createTaskUrl = 'http://localhost:8000/api/task/create/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) {
            _this.heroes = heroes.json().results;
            console.log("Testing 123 in heroes component - ", heroes.json());
        });
    };
    DashboardComponent.prototype.getPersonList = function () {
        var _this = this;
        this.taskService.getPersonList()
            .then(function (heroes) {
            _this.userlist = heroes.json();
            console.log("Testing userList in Task component - ", _this.userlist);
            console.log("Testing Hero.json in Task component - ", heroes.json());
        });
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
        // this.getHeroes(); //returns task list
        this.getPersonList(); //returns list of users
    };
    DashboardComponent.prototype.addtask = function (taskname, uid) {
        //saving scope of this in a
        // var a = this;
        // taskname = taskname.trim();
        var _this = this;
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
        var title = taskname, person = uid;
        var obj = {
            "title": taskname,
            "person": uid
        };
        return this.http
            .post(this.createTaskUrl, obj, { headers: this.headers })
            .toPromise()
            .then(function (response) { _this.assignMsg = response.json(); ; console.log("Json response after adding :- ", response.json()); })
            .catch(this.heroService.handleError);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css'],
        providers: [hero_service_1.HeroService, task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService,
        task_service_1.TaskService,
        http_1.Http,
        router_2.ActivatedRoute,
        common_1.Location])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map