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
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
//Services
var user_service_1 = require("../../Services/UserService/user.service");
var task_service_1 = require("../../Services/TaskService/task.service");
var auth_service_service_1 = require("../../Services/AuthService/auth-service.service");
var DashboardComponent = (function () {
    function DashboardComponent(
        // private loginComp:LoginComponent,
        router, userService, taskService, authService, http, route, location) {
        this.router = router;
        this.userService = userService;
        this.taskService = taskService;
        this.authService = authService;
        this.http = http;
        this.route = route;
        this.location = location;
        this.assignMsg = 0;
        console.log("Getting Username");
        this.username = localStorage.getItem('username');
        console.log("Printing Username in Dashboard Component", this.username);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getPersonList(); //returns list of users
    };
    DashboardComponent.prototype.getPersonList = function () {
        var _this = this;
        this.userService.getPersonListService()
            .subscribe(function (users) {
            _this.userlist = users;
            console.log("Testing userList in Task component - ", _this.userlist);
            console.log("Testing User.json in Task component - ", users);
        }, function (err) { return console.log("ERROR = ", err); });
    };
    DashboardComponent.prototype.handleUserUpdated = function ($event) {
        console.log("HANDLING USER EVENT HERE ----", $event.user);
        this.selectedUid = $event.user;
    };
    DashboardComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.logout();
        console.log("Printing Authorization Token after Logout : ", this.authService.get_authorization_header());
        this.router.navigate(['login']);
    };
    DashboardComponent.prototype.addtask = function (taskname) {
        var _this = this;
        console.log("User id in addtask = ", this.selectedUid);
        this.taskService.addTask(taskname, this.selectedUid).subscribe(function (response) {
            console.log("hello");
            _this.assignMsg = 1;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css'],
        providers: [user_service_1.UserService, task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        task_service_1.TaskService,
        auth_service_service_1.AuthService,
        http_1.Http,
        router_2.ActivatedRoute,
        common_1.Location])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map