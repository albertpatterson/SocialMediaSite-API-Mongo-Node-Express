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
 * Service providing access to premium content
 *
 * @export
 * @class PremiumService
 */
var PremiumService = (function () {
    /**
     * Creates an instance of PremiumService.
     * @param {Http} http
     * @memberof PremiumService
     */
    function PremiumService(http) {
        this.http = http;
        /**
         * url of the premium resource
         *
         * @private
         * @memberof PremiumService
         */
        this._premiumUrl = "/premium";
    }
    /**
     * get the premium items purchased by a user
     *
     * @param {string} username
     * @returns {Promise<string>}
     * @memberof PremiumService
     */
    PremiumService.prototype.getPremium = function (username) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append("username", username);
            var resolver = function (resp) { return res(resp.json().data); };
            _this.http.get(_this._premiumUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(resolver, resp, 200, "Unable to get premium items"); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * purchase a new premium item
     *
     * @param {string} username
     * @param {string} content
     * @returns {Promise<{}>}
     * @memberof PremiumService
     */
    PremiumService.prototype.addPremium = function (username, content) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append("username", username);
            data.append("item", content);
            var resolver = function () { return res(); };
            _this.http.post(_this._premiumUrl, data)
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(resolver, resp, 201, "Unable to add premium item"); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * delete a premium item
     *
     * @param {string} username
     * @param {number} index - index of the item to remove
     * @returns {Promise<{}>}
     * @memberof PremiumService
     */
    PremiumService.prototype.deletePremium = function (username, index) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append("username", username);
            data.append("index", index.toString());
            var resolver = function () { return res(); };
            _this.http.delete(_this._premiumUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(resolver, resp, 204, "Unable to delete premium item"); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    return PremiumService;
}());
PremiumService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PremiumService);
exports.PremiumService = PremiumService;
//# sourceMappingURL=premium.service.js.map