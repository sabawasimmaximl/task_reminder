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
//Auth Service
var auth_service_service_1 = require("../../Services/AuthService/auth-service.service");
var LoginComponent = (function () {
    function LoginComponent(router, http, authService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.headers = new http_1.Headers({ 'Content-type': 'application/json' });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.get_authorization_header()) {
            console.log("Succeded login");
            this.router.navigate(['/assigntask']);
            this.authService.sendLoginCheck(true);
        }
        else {
            console.log("No User logged in");
            this.router.navigate(['/login']);
            this.authService.sendLoginCheck(false);
        }
    };
    LoginComponent.prototype.loginFunc = function (username, password) {
        var _this = this;
        console.log("Calling AuthService Login");
        console.log("Printing Authorization Token Before Login : ", this.authService.get_authorization_header());
        this.authService.login(username, password).subscribe(function (data) {
            console.log("Subscribed data = ", data);
            if (_this.authService.get_authorization_header()) {
                console.log("Succeded login");
                _this.router.navigate(['/assigntask']);
                _this.authService.sendLoginCheck(true);
            }
            else {
                console.log("Failed login");
                _this.router.navigate(['/login']);
                _this.authService.sendLoginCheck(false);
            }
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
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, auth_service_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map