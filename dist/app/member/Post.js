"use strict";
/**
 * a post or message
 *
 * @export
 * @class Post
 */
var Post = (function () {
    /**
     * Creates an instance of Post.
     * @param {string} poster - the username of the posts
     * @param {string} content - the content of the post
     * @param {string} timestamp - the time when the post was created
     * @memberof Post
     */
    function Post(poster, content, timestamp) {
        this.poster = poster;
        this.content = content;
        this.timestamp = timestamp;
    }
    return Post;
}());
exports.Post = Post;
;
//# sourceMappingURL=Post.js.map