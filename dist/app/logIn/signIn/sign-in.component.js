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
var auth_service_1 = require("./../../services/auth.service");
/**
 * Component allowing users to sign into their existing account
 *
 * @export
 * @class SignInComponent
 */
var SignInComponent = (function () {
    function SignInComponent(authService) {
        this.authService = authService;
        /**
         * event to be emitted when the user has signed in
         *
         * @type {EventEmitter<string>}
         * @memberof SignInComponent
         */
        this.signedInEvent = new core_1.EventEmitter();
        this.usernamePattern = "\\w{1,10}";
        this.usernameDiagnostic = "username must be alphanumeric and be between 1 and 10 characters";
        this.passwordPattern = "\\S{1,10}";
        this.passwordDiagnostic = "password must contain no white space and be between 1 and 10 characters";
        this.invalidCredentials = false;
        this.invalidCredentialsBaseDiagnostic = "Invalid username and/or password!";
        this.invalidCredentialsDiagnostic = "";
    }
    /**
     * attempt to sign into a user's account
     *
     * @memberof SignInComponent
     */
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        console.log(" sign in " + this.username + " " + this.password);
        this.authService.tryLogin(this.username, this.password)
            .then(function () { return _this.signedInEvent.next(_this.username); })
            .catch(this._updateUserOfLoginError.bind(this));
    };
    /**
     * update the invalid login information shown to the user and reset password
     *
     * @param {*} error
     * @memberof SignInComponent
     */
    SignInComponent.prototype._updateUserOfLoginError = function (error) {
        console.log('login err', error);
        this.invalidCredentials = true;
        this.password = '';
        this.invalidCredentialsDiagnostic = this.invalidCredentialsBaseDiagnostic + (error ? (" " + error) : null);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    core_1.Component({
        selector: 'sign-in',
        outputs: ["signedInEvent"],
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], SignInComponent);
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map