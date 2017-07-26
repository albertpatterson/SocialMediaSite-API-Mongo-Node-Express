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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var handleResponse_1 = require("../utils/handleResponse");
var auth_service_1 = require("./auth.service");
/**
 * Service that allows new users to sign up for an account
 *
 * @export
 * @class SignUpService
 */
var SignUpService = (function () {
    /**
     * Creates an instance of SignUpService.
     * @param {Http} http
     * @param {AuthService} authService
     * @memberof SignUpService
     */
    function SignUpService(http, authService) {
        this.http = http;
        this.authService = authService;
        /**
         * the url of the signUp resource
         *
         * @private
         * @memberof SignUpService
         */
        this._signUpUrl = '/signUp';
    }
    /**
     * sign up for a member account and automatically sign in if successful
     *
     * @param {string} username - unique name of the user
     * @param {string} location - current location of the user
     * @param {string} DOB - the user's date of birth
     * @param {string} business - the business the user works in
     * @param {*} picture - the user's picture
     * @param {string} password - the user's password
     * @returns {Promise<{}>}
     * @memberof SignUpService
     */
    SignUpService.prototype.signUp = function (username, location, DOB, business, picture, password) {
        var _this = this;
        console.log('send sign up request');
        return new Promise(function (res, rej) {
            var formData = new FormData();
            formData.append('username', username);
            formData.append('location', location);
            formData.append('DOB', DOB);
            formData.append('business', business);
            formData.append("picture", picture, picture.name);
            formData.append('password', password);
            _this.http.post(_this._signUpUrl, formData)
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 201, "Could not create user."); })
                .then(function () { return _this.authService.tryLogin(username, password); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    return SignUpService;
}());
SignUpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        auth_service_1.AuthService])
], SignUpService);
exports.SignUpService = SignUpService;
//# sourceMappingURL=sign-up.service.js.map