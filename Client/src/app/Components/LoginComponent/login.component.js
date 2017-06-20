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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-type': 'application/json' });
        this.loginUrl = 'http://localhost:8000/api/account/login/';
    }
    LoginComponent.prototype.loginFunc = function (username, password) {
        var _this = this;
        this.http.post(this.loginUrl, { username: username, password: password }, this.headers)
            .toPromise().then(function (response) {
            console.log("Backend data = ", response.json().token[0].pk);
            localStorage.setItem('auth_token', response.json().token[0].pk);
            console.log("Auth Token = ", localStorage.getItem('auth_token'));
            _this.router.navigate(['dashboard']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map