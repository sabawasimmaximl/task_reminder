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
var hero_service_1 = require("./hero.service");
require("rxjs/add/operator/toPromise");
var TaskService = (function () {
    function TaskService(http, heroService) {
        this.http = http;
        this.heroService = heroService;
        this.getPersonListUrl = 'http://localhost:8000/api/person/list/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    //Error Handling function
    TaskService.prototype.getPersonList = function () {
        return this.http.get(this.getPersonListUrl).toPromise();
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, hero_service_1.HeroService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map