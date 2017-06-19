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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
//Services
var sync_service_service_1 = require("../../Services/SyncService/sync-service.service");
var TaskService = (function () {
    function TaskService(http, syncService) {
        this.http = http;
        this.syncService = syncService;
        this.getUsersUrl = 'http://localhost:8000/api/task/person/';
        this.getPersonListUrl = 'http://localhost:8000/api/person/list/';
        this.createTaskUrl = 'http://localhost:8000/api/task/create/';
    }
    TaskService.prototype.addTask = function (taskname, uid) {
        var title = taskname, person = uid;
        this.operation = "AssignTaskOperation";
        return this.syncService.assigntask(this.createTaskUrl, title, person, this.operation);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, sync_service_service_1.SyncService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map