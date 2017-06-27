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
var notification_service_1 = require("../../Services/NotificationService/notification.service");
var NotificationComponent = (function () {
    function NotificationComponent(notificationService) {
        this.notificationService = notificationService;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.returnNotificationArray();
    };
    NotificationComponent.prototype.returnNotificationArray = function () {
        var _this = this;
        //Calls function in Notification Service;
        this.notificationService.returnNotifArrayObs().subscribe(function (result) {
            _this.notifArray = result;
            console.log("Getting Notification Array in Notif Component = ", _this.notifArray);
        });
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    core_1.Component({
        selector: 'notif',
        templateUrl: './notification.component.html',
        styleUrls: ['./notification.component.css'],
    }),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationComponent);
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map