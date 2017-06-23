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
var PersonSelectorComponent = (function () {
    function PersonSelectorComponent(taskService, userService, router) {
        this.taskService = taskService;
        this.userService = userService;
        this.router = router;
        this.personSelectedEmit = new core_1.EventEmitter();
    }
    PersonSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getPersonListService()
            .subscribe(function (users) {
            _this.userlist = users;
            console.log("USER LIST in Person Selector = ", _this.userlist);
        });
    };
    PersonSelectorComponent.prototype.onSelect = function (user) {
        this.personSelected = user;
        console.log("Selected Person = ", this.personSelected);
        this.personSelectedEmit.emit(this.personSelected);
    };
    return PersonSelectorComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PersonSelectorComponent.prototype, "personSelectedEmit", void 0);
PersonSelectorComponent = __decorate([
    core_1.Component({
        selector: 'person-selector',
        templateUrl: './person-selector.component.html',
        providers: [user_service_1.UserService, task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        user_service_1.UserService,
        router_1.Router])
], PersonSelectorComponent);
exports.PersonSelectorComponent = PersonSelectorComponent;
//# sourceMappingURL=person-selector.component.js.map