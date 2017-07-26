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
 * Service providing a user to access to messages
 *
 * @export
 * @class MessageService
 */
var MessageService = (function () {
    /**
     * Creates an instance of MessageService.
     * @param {Http} http
     * @memberof MessageService
     */
    function MessageService(http) {
        this.http = http;
        /**
         * url providing access to the message resource
         *
         * @private
         * @type {string}
         * @memberof MessageService
         */
        this._messageUrl = "/message";
    }
    /**
     * get the number of message available to a user
     *
     * @param {string} username
     * @returns {Promise<number>}
     * @memberof MessageService
     */
    MessageService.prototype.getMessageCount = function (username) {
        return this.getMessages(username).then(function (ms) { return ms.length; });
    };
    /**
     * get the messages available to a user
     *
     * @param {string} username
     * @returns {Promise<Post[]>}
     * @memberof MessageService
     */
    MessageService.prototype.getMessages = function (username) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            var resolver = function (resp) { return res(resp.json().data); };
            _this.http.get(_this._messageUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(resolver, resp, 200, "Could not get messages."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * send a new message from a user to another user
     *
     * @param {string} username - the name of the user sending the message
     * @param {string} content - the content of the message
     * @param {string} recipient - the recipient of the message
     * @returns {Promise<{}>}
     * @memberof MessageService
     */
    MessageService.prototype.addMessage = function (username, content, recipient) {
        var _this = this;
        console.log('add post', username, content);
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            data.append('content', content);
            data.append('recipient', recipient);
            _this.http.post(_this._messageUrl, data)
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 201, "Could not add message."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * delete a message
     *
     * @param {string} username - the name of the user whose message should be deleted
     * @param {number} idx - the index of the message to delete
     * @returns {Promise<{}>}
     * @memberof MessageService
     */
    MessageService.prototype.deleteMessage = function (username, idx) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            data.append('index', idx.toString());
            _this.http.post(_this._messageUrl, data)
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 204, "Could not delete message."); })
                .then(function () { return res(); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map