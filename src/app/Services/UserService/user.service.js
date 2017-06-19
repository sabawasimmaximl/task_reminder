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
//Services
var sync_service_service_1 = require("../../Services/SyncService/sync-service.service");
var UserService = (function () {
    function UserService(http, syncService) {
        this.http = http;
        this.syncService = syncService;
        this.usersUrl = 'http://localhost:8000/api/task/list';
        this.getPersonListUrl = 'http://localhost:8000/api/person/list/';
    }
    //Error Handling function
    UserService.prototype.handleError = function (error) {
        console.error('An error has occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    // Getting One User
    // getHero(id: number): Promise<User> {
    // const url = `${this.usersUrl}/${id}`;
    // console.log("Id = "+ id);
    // console.log("Get User called");
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json().data as User)
    //   .catch(this.handleError);
    // }
    UserService.prototype.getPersonList = function () {
        this.operation = "getPersonList";
        return this.syncService.retrieve(this.getPersonListUrl, this.operation);
    };
    UserService.prototype.getAllDetails = function () {
        this.operation = "getPersonList";
        return this.syncService.retrieve(this.usersUrl, this.operation);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, sync_service_service_1.SyncService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map