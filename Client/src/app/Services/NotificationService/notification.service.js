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
var Subject_1 = require("rxjs/Subject");
//Services
var sync_service_service_1 = require("../../Services/SyncService/sync-service.service");
var NotificationService = (function () {
    function NotificationService(syncService) {
        var _this = this;
        this.syncService = syncService;
        this.notifArraySource = new Subject_1.Subject();
        //WebSocket Code
        this.ws = new WebSocket('ws://localhost:8000/ws/notifications?subscribe-broadcast');
        this.notifArray$ = this.notifArraySource.asObservable();
        setInterval(function (x) { _this.getNotifArray(); }, 5000);
        this.ws.onopen = function () {
            console.log("websocket connected");
        };
        this.ws.onmessage = function (e) {
            console.log("Received: " + e.data);
            alert(e.data);
        };
        this.ws.onerror = function (e) {
            console.error(e);
        };
        this.ws.onclose = function (e) {
            console.log("connection closed");
        };
    }
    NotificationService.prototype.getNotifArray = function () {
        var _this = this;
        this.syncService.get("", "Get Notification Array").subscribe(function (result) {
            _this.notifArraySource.next(result);
        });
    };
    NotificationService.prototype.returnNotifArrayObs = function () {
        this.notifArray$ = this.notifArraySource.asObservable();
        return this.notifArray$;
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [sync_service_service_1.SyncService])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map