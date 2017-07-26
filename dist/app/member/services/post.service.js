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
 * Service providing a user access to posts
 *
 * @export
 * @class PostService
 */
var PostService = (function () {
    /**
     * Creates an instance of PostService.
     * @param {Http} http
     * @memberof PostService
     */
    function PostService(http) {
        this.http = http;
        /**
         * url of the post resource
         *
         * @private
         * @type {string}
         * @memberof PostService
         */
        this._postUrl = "/post";
    }
    /**
     * get the posts followed by a user
     *
     * @param {string} username
     * @returns {Promise<Post[]>}
     * @memberof PostService
     */
    PostService.prototype.getFollowedPosts = function (username) {
        return this._getPosts(username, username, "followed");
    };
    /**
     * get the posts created by a user
     *
     * @param {string} username
     * @param {string} poster
     * @returns {Promise<Post[]>}
     * @memberof PostService
     */
    PostService.prototype.getOwnPosts = function (username, poster) {
        return this._getPosts(username, poster, "own");
    };
    /**
     * get various types of posts
     *
     * @private
     * @param {string} username
     * @param {string} poster
     * @param {string} type - the type of posts ("followed" or "own")
     * @returns {Promise<Post[]>}
     * @memberof PostService
     */
    PostService.prototype._getPosts = function (username, poster, type) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            data.append('poster', poster);
            data.append('type', type);
            var resolver = function (resp) { return res(resp.json().data); };
            _this.http.get(_this._postUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(resolver, resp, 200, "Could not get posts."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * add a new post
     *
     * @param {string} username
     * @param {string} content
     * @returns {Promise<{}>}
     * @memberof PostService
     */
    PostService.prototype.addPost = function (username, content) {
        var _this = this;
        console.log('add post', username, content);
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            data.append('content', content);
            _this.http.post(_this._postUrl, data)
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 201, "Could not add post."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    /**
     * delete a post
     *
     * @param {string} username
     * @param {number} idx - index of the post to delete
     * @returns {Promise<{}>}
     * @memberof PostService
     */
    PostService.prototype.deletePost = function (username, idx) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new http_1.URLSearchParams();
            data.append('username', username);
            data.append('index', idx.toString());
            _this.http.delete(_this._postUrl, { search: data })
                .toPromise()
                .then(function (resp) { return handleResponse_1.assertStatus(res, resp, 204, "Could not delete post."); })
                .catch(function (err) { return handleResponse_1.handleError(rej, err); });
        });
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map