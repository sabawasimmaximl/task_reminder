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
var dashboard_component_1 = require("./Components/DashboardComponent/dashboard.component");
var users_component_1 = require("./Components/UsersComponent/users.component");
var user_search_component_1 = require("./Components/UserSearchComponent/user-search.component");
var login_component_1 = require("./Components/LoginComponent/login.component");
var auth_guard_1 = require("./auth.guard");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'users', component: users_component_1.UsersComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'usersearch', component: user_search_component_1.UserSearchComponent },
    { path: 'myapp', component: app_component_1.AppComponent },
    { path: 'login', component: login_component_1.LoginComponent }
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