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
//Services
var auth_service_service_1 = require("../../Services/AuthService/auth-service.service");
var auth_guard_1 = require("../../auth.guard");
var baseUrl_1 = require("../../Class/baseUrl");
var SyncService = (function () {
    function SyncService(http, router, authService, authGuard) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.authGuard = authGuard;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log("Storing Auth Token in Sync Service");
        this.token = authService.get_authorization_header();
    }
    SyncService.prototype.handleError = function (error) {
        console.error('An error has occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SyncService.prototype.get = function (endpoint, operation) {
        if (this.authGuard.canActivate()) {
            console.log("Calling HTTP GET- SyncService");
            console.log("Operation = ", operation);
            var url = baseUrl_1.BaseUrl.baseurl + endpoint;
            //appending headers
            this.headers.append('Authorization', this.token);
            return this.http.get(url, this.headers).map(function (response) {
                return response.json();
            });
        }
        else {
            console.log("Please Login (GET Fn - SyncService)");
            this.router.navigate(['login']);
        }
    };
    SyncService.prototype.post = function (endpoint, data, operation) {
        if (this.authGuard.canActivate()) {
            console.log("Calling HTTP POST - SyncService");
            console.log("Operation = ", operation);
            var url = baseUrl_1.BaseUrl.baseurl + endpoint;
            //appending headers
            this.headers.append('Authorization', this.token);
            console.log("Data Sent in Post Request= ", data);
            console.log("URL in Post Request= ", url);
            return this.http.post(url, data, this.headers);
        }
        else {
            console.log("Please Login (POST Fn - SyncService)");
            this.router.navigate(['login']);
        }
    };
    return SyncService;
}());
SyncService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        auth_service_service_1.AuthService,
        auth_guard_1.AuthGuard])
], SyncService);
exports.SyncService = SyncService;
//# sourceMappingURL=sync-service.service.js.map