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
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
//Services
var user_service_1 = require("../../Services/UserService/user.service");
var task_service_1 = require("../../Services/TaskService/task.service");
var UserSearchComponent = (function () {
    function UserSearchComponent(taskService, userService, router) {
        this.taskService = taskService;
        this.userService = userService;
        this.router = router;
        this.userExists = 0;
    }
    // Push a search term into the observable stream.
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getPersonListService().subscribe(function (users) {
            //initialising userlist,user arrays
            _this.userlist = users.results;
            _this.user = users.results[0];
        });
    };
    UserSearchComponent.prototype.getSingleUserDetail = function (selectedUserObj) {
        var _this = this;
        this.selectedUser = selectedUserObj;
        this.userExists = 1;
        console.log("PRNTING selected User = ", this.selectedUser);
        console.log("PRNTING USER ID VALUE for selected User = ", this.selectedUser.id);
        this.userService.getSingleUser(this.selectedUser.id).subscribe(function (response) {
            _this.user = response.results;
            console.log("Response = ", _this.user);
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
    __metadata("design:paramtypes", [task_service_1.TaskService,
        user_service_1.UserService,
        router_1.Router])
], UserSearchComponent);
exports.UserSearchComponent = UserSearchComponent;
//# sourceMappingURL=user-search.component.js.map