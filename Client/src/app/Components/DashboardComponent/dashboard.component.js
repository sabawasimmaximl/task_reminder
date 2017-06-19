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
var DashboardComponent = (function () {
    function DashboardComponent(router, userService, taskService, http, route, location) {
        this.router = router;
        this.userService = userService;
        this.taskService = taskService;
        this.http = http;
        this.route = route;
        this.location = location;
        this.assignMsg = 0;
        this.getUsersUrl = 'http://localhost:8000/api/task/person/';
        this.getPersonListUrl = 'http://localhost:8000/api/person/list/';
        this.createTaskUrl = 'http://localhost:8000/api/task/create/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getPersonList(); //returns list of users
    };
    DashboardComponent.prototype.getPersonList = function () {
        var _this = this;
        this.userService.getPersonList()
            .then(function (users) {
            _this.userlist = users.json();
            console.log("Testing userList in Task component - ", _this.userlist);
            console.log("Testing User.json in Task component - ", users.json());
        });
    };
    DashboardComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DashboardComponent.prototype.addtask = function (taskname, uid) {
        var _this = this;
        this.taskService.addTask(taskname, uid).then(function () { return _this.assignMsg = 1; });
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
        http_1.Http,
        router_2.ActivatedRoute,
        common_1.Location])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map