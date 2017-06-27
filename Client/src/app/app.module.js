"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
//Components
var app_component_1 = require("./Components/AppComponent/app.component");
var assign_task_component_1 = require("./Components/AssignTaskComponent/assign-task.component");
var all_details_component_1 = require("./Components/AllDetailsComponent/all-details.component");
var notification_component_1 = require("./Components/NotificationComponent/notification.component");
var user_search_component_1 = require("./Components/UserSearchComponent/user-search.component");
var login_component_1 = require("./Components/LoginComponent/login.component");
var dashboard_component_1 = require("./Components/DashboardComponent/dashboard.component");
var task_list_component_1 = require("./Components/TaskListComponent/task-list.component");
var person_name_component_1 = require("./Components/PersonNameComponent/person-name.component");
var person_selector_component_1 = require("./Components/PersonSelectorComponent/person-selector.component");
//Services
var user_service_1 = require("./Services/UserService/user.service");
var task_service_1 = require("./Services/TaskService/task.service");
var sync_service_service_1 = require("./Services/SyncService/sync-service.service");
var auth_service_service_1 = require("./Services/AuthService/auth-service.service");
var notification_service_1 = require("./Services/NotificationService/notification.service");
var auth_guard_1 = require("./auth.guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            assign_task_component_1.AssignTaskComponent,
            user_search_component_1.UserSearchComponent,
            all_details_component_1.AllDetailsComponent,
            login_component_1.LoginComponent,
            dashboard_component_1.DashboardComponent,
            task_list_component_1.TaskListComponent,
            notification_component_1.NotificationComponent,
            person_name_component_1.PersonNameComponent,
            person_selector_component_1.PersonSelectorComponent
        ],
        providers: [user_service_1.UserService, task_service_1.TaskService, sync_service_service_1.SyncService, auth_service_service_1.AuthService, notification_service_1.NotificationService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map