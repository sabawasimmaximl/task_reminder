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
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var baseUrl_1 = require("../../Class/baseUrl");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = baseUrl_1.BaseUrl.baseurl + 'auth/token/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.loginCheck = new Subject_1.Subject();
    }
    AuthService.prototype.login = function (username, password) {
        console.log("Calling Login on Auth Service");
        return this.http.post(this.loginUrl, { username: username, password: password }, this.headers)
            .map(function (response) {
            console.log("Backend data received = ", response.json());
            console.log("UserName received = ", response.json().username);
            localStorage.setItem('auth_token', response.json().token[0].pk);
            localStorage.setItem('username', response.json().username);
            console.log("Auth Token (AuthService) = ", localStorage.getItem('auth_token'));
            return response.json();
        });
    };
    //Logout Function
    AuthService.prototype.logout = function () {
        console.log("Calling LogOut on Auth Service");
        localStorage.removeItem('auth_token');
        localStorage.removeItem('username');
        console.log("Removing Token, Auth Token value now =", localStorage.getItem('auth_token'));
        console.log("Removing Token, Username value now =", localStorage.getItem('username'));
    };
    //Check if User is Logged In Function
    AuthService.prototype.isLoggedIn = function () {
        if (this.get_authorization_header()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.sendLoginCheck = function (value) {
        this.loginCheck.next(value);
    };
    AuthService.prototype.getLoginCheck = function () {
        return this.loginCheck.asObservable();
    };
    //Function to return Authorization Token if it exists  
    AuthService.prototype.get_authorization_header = function () {
        console.log("Calling Get Authorization Header on Auth Service");
        return localStorage.getItem('auth_token');
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth-service.service.js.map