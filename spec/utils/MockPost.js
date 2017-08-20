Post = require("../../services/Post");

let count = 0;
class MockPost extends Post{
    constructor(username){
        super(username, "This is post #"+count++);
    }
}

module.exports = MockPost;