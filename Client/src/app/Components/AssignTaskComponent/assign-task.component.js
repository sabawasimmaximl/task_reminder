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
//Services
var user_service_1 = require("../../Services/UserService/user.service");
var task_service_1 = require("../../Services/TaskService/task.service");
var auth_service_service_1 = require("../../Services/AuthService/auth-service.service");
var AssignTaskComponent = (function () {
    function AssignTaskComponent(
        // private loginComp:LoginComponent,
        router, taskService, authService) {
        this.router = router;
        this.taskService = taskService;
        this.authService = authService;
        this.assignMsg = 0;
        console.log("Getting Username");
        this.username = localStorage.getItem('username');
        console.log("Printing Username in Assing Task Component", this.username);
    }
    //Receives Output Emitted by the Person-Selector Component
    AssignTaskComponent.prototype.handleUserUpdated = function (obj) {
        console.log("HANDLING USER EVENT HERE ----", obj.user);
        //Return User object here.
        this.selectedUid = obj.id;
    };
    AssignTaskComponent.prototype.logout = function () {
        this.authService.logout();
        console.log("Printing Authorization Token after Logout : ", this.authService.get_authorization_header());
        this.router.navigate(['login']);
    };
    AssignTaskComponent.prototype.addtask = function (taskname) {
        var _this = this;
        console.log("User id in addtask = ", this.selectedUid);
        this.taskService.addTask(taskname, this.selectedUid).subscribe(function (response) {
            console.log("hello");
            _this.assignMsg = 1;
        });
    };
    return AssignTaskComponent;
}());
AssignTaskComponent = __decorate([
    core_1.Component({
        selector: 'assign-task',
        templateUrl: './assign-task.component.html',
        styleUrls: ['./assign-task.component.css'],
        providers: [user_service_1.UserService, task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        task_service_1.TaskService,
        auth_service_service_1.AuthService])
], AssignTaskComponent);
exports.AssignTaskComponent = AssignTaskComponent;
//# sourceMappingURL=assign-task.component.js.map