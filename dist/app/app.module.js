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
var member_module_1 = require("./member/member.module");
var app_component_1 = require("./app.component");
var not_found_component_1 = require("./not-found.component");
// import { SignInComponent } from './signIn/sign-in.component';
var log_in_component_1 = require("./logIn/log-in.component");
var sign_in_component_1 = require("./logIn/signIn/sign-in.component");
var sign_up_component_1 = require("./logIn/signUp/sign-up.component");
var auth_service_1 = require("./services/auth.service");
var sign_up_service_1 = require("./services/sign-up.service");
// import { AuthService } from './services/mock_auth.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            member_module_1.MemberModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent,
            not_found_component_1.NotFoundComponent,
            log_in_component_1.LogInComponent,
            sign_in_component_1.SignInComponent,
            sign_up_component_1.SignUpComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [auth_service_1.AuthService,
            sign_up_service_1.SignUpService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map