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
var user_service_1 = require("../../Services/UserService/user.service");
var task_service_1 = require("../../Services/TaskService/task.service");
var AllDetailsComponent = (function () {
    function AllDetailsComponent(userService, taskService) {
        this.userService = userService;
        this.taskService = taskService;
    }
    AllDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getAllDetails().subscribe(function (result) {
            _this.tasks = result;
        });
    };
    return AllDetailsComponent;
}());
AllDetailsComponent = __decorate([
    core_1.Component({
        selector: 'users',
        templateUrl: './all-details.component.html',
        styleUrls: ['./all-details.component.css'],
        providers: [user_service_1.UserService, task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, task_service_1.TaskService])
], AllDetailsComponent);
exports.AllDetailsComponent = AllDetailsComponent;
//# sourceMappingURL=all-details.component.js.map