"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import {SignInComponent} from './signIn/sign-in.component';
var log_in_component_1 = require("./logIn/log-in.component");
var not_found_component_1 = require("./not-found.component");
var member_component_1 = require("./member/member.component");
var routes = [
    { path: 'member/:ownName', component: member_component_1.MemberComponent },
    { path: 'sign-in', component: log_in_component_1.LogInComponent },
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.NotFoundComponent }
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
;
//# sourceMappingURL=app-routing.module.js.map