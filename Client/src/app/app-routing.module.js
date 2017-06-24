"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./Components/AppComponent/app.component");
var assign_task_component_1 = require("./Components/AssignTaskComponent/assign-task.component");
var all_details_component_1 = require("./Components/AllDetailsComponent/all-details.component");
var user_search_component_1 = require("./Components/UserSearchComponent/user-search.component");
var login_component_1 = require("./Components/LoginComponent/login.component");
var auth_guard_1 = require("./auth.guard");
var routes = [
    { path: './', redirectTo: 'login', pathMatch: 'full', canActivate: [auth_guard_1.AuthGuard] },
    { path: 'assigntask', component: assign_task_component_1.AssignTaskComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'alldetails', component: all_details_component_1.AllDetailsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'usersearch', component: user_search_component_1.UserSearchComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'myapp', component: app_component_1.AppComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: "**", component: login_component_1.LoginComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map