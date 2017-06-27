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
var UserSearchComponent = (function () {
    function UserSearchComponent(taskService) {
        this.taskService = taskService;
        this.task_exists = 0;
    }
    //Receives Output Emitted by the Person-Selector Component
    UserSearchComponent.prototype.handleUserUpdated = function (obj) {
        var _this = this;
        console.log("HANDLING USER EVENT HERE in User Search----", obj.user);
        this.selectedUid = obj.id;
        this.taskService.getSpecificTaskDetails(this.selectedUid).subscribe(function (response) {
            _this.tasks = response;
            console.log("Response = ", _this.tasks);
            if (_this.tasks) {
                _this.task_exists = 1;
            }
            else {
                _this.task_exists = 0;
            }
        });
    };
    return UserSearchComponent;
}());
UserSearchComponent = __decorate([
    core_1.Component({
        selector: 'user-search',
        templateUrl: './user-search.component.html',
        styleUrls: ['./user-search.component.css'],
        providers: [user_service_1.UserService, task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], UserSearchComponent);
exports.UserSearchComponent = UserSearchComponent;
//# sourceMappingURL=user-search.component.js.map