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
//Services
var auth_service_service_1 = require("../../Services/AuthService/auth-service.service");
var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.getLoginCheck()
            .subscribe(function (message) {
            _this.showDash = message;
            console.log("Message Received in Dashboard (True=loggedIn, False = loggedOut) : ", _this.showDash);
        });
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dash',
        templateUrl: './dashboard.component.html',
    }),
    __metadata("design:paramtypes", [auth_service_service_1.AuthService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map