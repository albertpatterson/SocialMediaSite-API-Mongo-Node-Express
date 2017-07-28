
class Post{
    constructor(poster, content){
        this.poster = poster;
        this.content = content;
        this.timestamp = new Date();
    }
}


module.exports = Post;
