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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var SyncService = (function () {
    function SyncService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.token = localStorage.getItem('auth_token');
        if (this.token) {
            this.headers.append('Authorization', 'Bearer ' + this.token);
            console.log("TOKEN EXISTS----------");
            console.log(this.headers);
            console.log("Navigating to users----------");
            this.router.navigate(['dashboard']);
        }
        else {
            console.log("TOKEN DOES NOT EXIST");
            console.log("Navigating to users----------");
            this.router.navigate(['login']);
        }
    }
    SyncService.prototype.handleError = function (error) {
        console.error('An error has occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SyncService.prototype.retrieve = function (url, operation) {
        console.log("Operation = ", operation);
        if (this.token)
            return this.http.get(url, this.token).toPromise();
        else {
            console.log("TOKEN DOES NOT EXIST");
        }
    };
    SyncService.prototype.assigntask = function (createTaskUrl, title, person, operation) {
        console.log("Operation = ", operation);
        if (this.token)
            return this.http.post(createTaskUrl, JSON.stringify({ title: title, person: person }), { headers: this.headers })
                .toPromise();
        else {
            console.log("TOKEN DOES NOT EXIST");
        }
    };
    SyncService.prototype.getSingleUser = function (url, operation) {
        console.log("Operation = ", operation);
        if (this.token)
            return this.http.get(url, this.token)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        else {
            console.log("TOKEN DOES NOT EXIST");
        }
    };
    return SyncService;
}());
SyncService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], SyncService);
exports.SyncService = SyncService;
//# sourceMappingURL=sync-service.service.js.map