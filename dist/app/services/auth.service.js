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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var handleResponse_1 = require("../utils/handleResponse");
/**
 * Service used to authenticate users and provide access to the members area
 *
 * @export
 * @class AuthService
 */
var AuthService = (function () {
    /**
     * Creates an instance of AuthService.
     * @param {Http} http
     * @param {Router} router
     * @memberof AuthService
     */
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        /**
         * url providing access to the session resource
         *
         * @private
         * @type {string}
         * @memberof AuthService
         */
        this._loginUrl = "/session";
    }
    /**
     * attempt to log in
     *
     * @param {string} username
     * @param {string} password
     * @returns {Promise<{}>}
     * @memberof AuthService
     */
    AuthService.prototype.tryLogin = function (username, password) {
        var _this = this;
        var data = new http_1.URLSearchParams();
        data.append('username', username);
        data.append('password', password);
        return new Promise(function (res, rej) {
            _this.http.post(_this._loginUrl, data)
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 201, "Sign-in failed"); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * assert that a user is logged with a valid session in and redirect to the log in page if not
     *
     * @param {string} username
     * @returns {Promise<boolean>}
     * @memberof AuthService
     */
    AuthService.prototype.assertLoggedIn = function (username) {
        console.log("check session " + username);
        var data = new http_1.URLSearchParams();
        data.append('username', username);
        return new Promise(function (res, rej) {
            var _this = this;
            var rejector = function () { _this.router.navigate(['/sign-in']); rej(); };
            this.http.get(this._loginUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 200, "invalid session"); })
                .catch(function (err) { return handleResponse_1.handleError(rejector, err); });
        }.bind(this));
    };
    /**
     * sign out and delete the user's session
     *
     * @param {string} username
     * @returns {Promise<any>}
     * @memberof AuthService
     */
    AuthService.prototype.signout = function (username) {
        console.log("delete session " + username);
        var data = new http_1.URLSearchParams();
        data.append('username', username);
        return new Promise(function (res, rej) {
            this.http.delete(this._loginUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 204, "invalid session, signout failed"); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        }.bind(this));
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map