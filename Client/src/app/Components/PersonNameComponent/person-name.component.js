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
var PersonNameComponent = (function () {
    function PersonNameComponent(userService) {
        this.userService = userService;
    }
    PersonNameComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log("User ID Mila", this.personId);
        this.userService.getSingleUser(this.personId).subscribe(function (response) {
            _this.username = response.username;
            console.log("Response = ", _this.username);
        });
    };
    return PersonNameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PersonNameComponent.prototype, "personId", void 0);
PersonNameComponent = __decorate([
    core_1.Component({
        selector: 'person-name',
        templateUrl: './person-name.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], PersonNameComponent);
exports.PersonNameComponent = PersonNameComponent;
//# sourceMappingURL=person-name.component.js.map