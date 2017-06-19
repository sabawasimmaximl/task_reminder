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
var dashboard_component_1 = require("./Components/DashboardComponent/dashboard.component");
var users_component_1 = require("./Components/UsersComponent/users.component");
var user_detail_component_1 = require("./Components/UserDetailComponent/user-detail.component");
var user_search_component_1 = require("./Components/UserSearchComponent/user-search.component");
var login_component_1 = require("./Components/LoginComponent/login.component");
//Services
var user_service_1 = require("./Services/UserService/user.service");
var user_search_service_1 = require("./Services/UserSearchService/user-search.service");
var task_service_1 = require("./Services/TaskService/task.service");
var sync_service_service_1 = require("./Services/SyncService/sync-service.service");
var auth_service_service_1 = require("./Services/AuthService/auth-service.service");
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
            dashboard_component_1.DashboardComponent,
            user_search_component_1.UserSearchComponent,
            user_detail_component_1.UserDetailComponent,
            users_component_1.UsersComponent,
            login_component_1.LoginComponent
        ],
        providers: [user_service_1.UserService, task_service_1.TaskService, user_search_service_1.UserSearchService, sync_service_service_1.SyncService, auth_service_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map