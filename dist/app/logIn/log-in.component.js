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
var router_1 = require("@angular/router");
/**
 * Component showing the log-in and sign-up forms, which routes the user to their home page after signing in
 *
 * @export
 * @class LogInComponent
 */
var LogInComponent = (function () {
    function LogInComponent(router) {
        this.router = router;
    }
    // navigate the user to their home page
    LogInComponent.prototype.goHome = function (username) {
        console.log("go home " + username);
        this.router.navigate(["member", username]);
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    core_1.Component({
        selector: "log-in",
        templateUrl: "./log-in.component.html",
        styleUrls: ["./log-in.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LogInComponent);
exports.LogInComponent = LogInComponent;
//# sourceMappingURL=log-in.component.js.map