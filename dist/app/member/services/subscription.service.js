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
var handleResponse_1 = require("../../utils/handleResponse");
require("rxjs/add/operator/toPromise");
/**
 * Service providing access to subscriptions
 *
 * @export
 * @class SubscriptionService
 */
var SubscriptionService = (function () {
    /**
     * Creates an instance of SubscriptionService.
     * @param {Http} http
     * @memberof SubscriptionService
     */
    function SubscriptionService(http) {
        this.http = http;
        /**
         * url of the subscription resource
         *
         * @private
         * @type {string}
         * @memberof SubscriptionService
         */
        this._subscriptionUrl = "/subscription";
    }
    /**
     * get the list of users followed by the current user
     *
     * @param {string} username
     * @returns {Promise<String[]>}
     * @memberof SubscriptionService
     */
    SubscriptionService.prototype.getSubscriptions = function (username) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            var resolver = function (resp) { return res(resp.json().data); };
            _this.http.get(_this._subscriptionUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(resolver, resp, 204, "Could not get subscriptions."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * follow a user
     *
     * @param {string} username
     * @param {string} followee
     * @returns {Promise<{}>}
     * @memberof SubscriptionService
     */
    SubscriptionService.prototype.addSubscription = function (username, followee) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            data.append('followee', followee);
            _this.http.post(_this._subscriptionUrl, data)
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 201, "Could not add subscription."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * unfollow a user
     *
     * @param {string} username
     * @param {string} followee
     * @returns {Promise<{}>}
     * @memberof SubscriptionService
     */
    SubscriptionService.prototype.deleteSubscription = function (username, followee) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            data.append('followee', followee);
            _this.http.delete(_this._subscriptionUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 204, "Could not delete subscription."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    return SubscriptionService;
}());
SubscriptionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SubscriptionService);
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map