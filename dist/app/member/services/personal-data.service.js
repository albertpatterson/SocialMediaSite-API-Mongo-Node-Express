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
var handleResponse_1 = require("../../utils/handleResponse");
/**
 * Service providing access to a user's personal data
 *
 * @export
 * @class PersonalDataService
 */
var PersonalDataService = (function () {
    /**
     * Creates an instance of PersonalDataService.
     * @param {Http} http
     * @memberof PersonalDataService
     */
    function PersonalDataService(http) {
        this.http = http;
        /**
         * url of the personalData resource
         *
         * @private
         * @memberof PersonalDataService
         */
        this._personalDataUrl = "/personalData";
    }
    /**
     * get the personal data of a user
     *
     * @param {string} username - the username of the signed in user
     * @param {string} desiredUserName - the username of the user whose personal data is desired
     * @returns {Promise<User>}
     * @memberof PersonalDataService
     */
    PersonalDataService.prototype.getUserData = function (username, desiredUserName) {
        var _this = this;
        var resolverFactory = function (res) { return function (resp) { return res(_this._setAge(resp.json())); }; };
        return this._getUserData(username, "desiredUserName", desiredUserName, resolverFactory);
    };
    /**
     * update the user object to include the user's age, based on their DOB
     *
     * @private
     * @param {*} user - the personal data object of the user
     * @returns {User}
     * @memberof PersonalDataService
     */
    PersonalDataService.prototype._setAge = function (user) {
        user.age = Math.floor((Date.now() - Date.parse(user.DOB)) / 1000 / 60 / 60 / 24 / 365);
        return user;
    };
    /**
     * return user data for users matching a query
     *
     * @param {string} username - the name of the logged in user
     * @param {string} desiredUserQuery - query to match other users
     * @returns {Promise<User[]>}
     * @memberof PersonalDataService
     */
    PersonalDataService.prototype.searchUserData = function (username, desiredUserQuery) {
        var _this = this;
        var resolverFactory = function (res) { return function (resp) { return res(resp.json().data.map(function (user) { return _this._setAge(user); })); }; };
        return this._getUserData(username, "desiredUserQuery", desiredUserQuery, resolverFactory);
    };
    /**
     * get the user data of a single user or multiple users
     *
     * @private
     * @param {string} username - the username of the currently signed in user
     * @param {string} paramType - parameter specifying how to identify users ("desiredUserName" or "desiredUserQuery")
     * @param {string} param - the name of the user or the search query
     * @param {Function} resolverFactory - function creating a resolver to handle the retrieved data
     * @returns {Promise<any>}
     * @memberof PersonalDataService
     */
    PersonalDataService.prototype._getUserData = function (username, paramType, param, resolverFactory) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            data.append(paramType, param);
            var resolver = resolverFactory(res);
            _this.http.get(_this._personalDataUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(resolver, resp, 200, "Could not get personal data."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    return PersonalDataService;
}());
PersonalDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PersonalDataService);
exports.PersonalDataService = PersonalDataService;
//# sourceMappingURL=personal-data.service.js.map