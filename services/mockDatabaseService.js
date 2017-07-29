const Post = require('./Post');
const PremiumContent = require('./PremiumContent');
const PersonalData = require("./PersonalData");

let connected = false;

let mockUsers = {};

let imgCount = 0;
function imageInc(){
    let img =  `static/${imgCount}.png`;
    imgCount = ++imgCount%20;
    return img;
}

class MockPersonalData extends PersonalData{
    constructor(username){
        super(  username,
                username + "_location",
                new Date(),
                username + "_business",
                imageInc());
    }
}

function MockUser(username){
    this.username = username;
    this.password = username+"pw";
    this.personalData = new MockPersonalData(username);
    this.ownPosts = [];
    this.messages = [];
    this.followedBy = [];
    this.following = [username];
    this.premiumContent = [];
}


const mockUsernames = ["Anne", "Kim", "Dan", "Bob", "Pam", "Jen"];

let mockUserCreation = Promise.resolve();


function decorateUser(idx){


    const NFRIENDS = 2;
    const mockUsername = mockUsernames[idx];
    let friendOffset, friendIdx, friendName;

    mockUserCreation = mockUserCreation
        .then(function(){
            return this.addPost(mockUsername, new Post(mockUsername, "Post 1"));
        }.bind(this))
        .then(function(){
            return this.addPost(mockUsername, new Post(mockUsername, "Post 2"));
        }.bind(this))
        .then(function(){
            return this.addPremium(mockUsername, new PremiumContent(imageInc()));
        }.bind(this))
        .then(function(){
            return this.addPremium(mockUsername, new PremiumContent(imageInc()));
        }.bind(this));

    for(friendOffset = 1; friendOffset<=NFRIENDS; friendOffset++){
        
        friendIdx = (idx + friendOffset) % mockUsernames.length;
        friendName = mockUsernames[friendIdx];

        addMessageAndSubScription.call(this, mockUsername, friendName);

    } 
}

function addMessageAndSubScription(mockUsername, friendName){
        mockUserCreation = mockUserCreation
        .then(function(){
            return this.addMessage(mockUsername, new Post(friendName, "Message from "+friendName));
        }.bind(this))
        .then(function(){
            return this.addSubscription(mockUsername, friendName);
        }.bind(this));
}

class MockDatabaseService{
    
    constructor(){

        let mockUsername, mockUser;

        for(let idx=0; idx<mockUsernames.length; idx++){
            
            mockUsername = mockUsernames[idx];
            mockUser = new MockUser(mockUsername);
            mockUsers[mockUsername] = mockUser;
               
            decorateUser.call(this, idx);
        }
    }    
    
    connect(){}

    close(){}

    addUser(username, personalData, password){}

    checkUser(username){}

    assertUserExists(username){
        console.log('assert ', username);
        return new Promise(function(res, rej){
                    mockUsers.hasOwnProperty(username) ? res() : rej();
                }.bind(this));
    }

    deleteUser(username){}

    findPersonalData(username){
        return Promise.resolve(mockUsers[username].personalData);
    }

    findPersonalDataMultiple(query){}

    setPersonalData(username, personalData){}

    getPassword(username){   
        return  mockUserCreation
                .then(function(){
                    return this.assertUserExists(username);
                }.bind(this))
                .then(function(){
                    return mockUsers[username].password;
                })
    }

    setPassword(username, password){}

    getOwnPosts(username){
        return  this.assertUserExists(username)
                .then(function(){ 
                    return mockUsers[username].ownPosts;
                }.bind(this));
    }

    getFollowedPosts(username){
        return  this.assertUserExists(username)
                .then(function(){
                    let followedPosts = [];
                    let following = mockUsers[username].following;
                    following.forEach(followee=>{
                        [].push.apply(followedPosts, mockUsers[followee].ownPosts);
                    })
                    return followedPosts;
                })
    }

    addPost(username, post){
        return  this.assertUserExists(username)
                .then(function(){
                    mockUsers[username].ownPosts.push(post);
                }.bind(this));
    }

    deletePost(username, idx){
        return  this.assertUserExists(username)
                .then(function(){
                    return new Promise(function(res, rej){
                        if(mockUsers[username].ownPosts.length > idx){
                            mockUsers[username].ownPosts.splice(idx,1);
                            res();
                        }else{
                            rej("Post #"+idx+" does not exist");
                        }
                    }.bind(this));
                }.bind(this));
    }

    getMessages(username){
        return  this.assertUserExists(username)
                .then(function(){
                    return mockUsers[username].messages;
                }.bind(this))
    }

    addMessage(recipient, message){
        return  this.assertUserExists(recipient)
                .then(function(){
                    mockUsers[recipient].messages.push(message);
                }.bind(this))
    }

    deleteMessage(username, idx){}

    addFollower(followeeUsername, followerUsername){}

    deleteFollower(followeeUsername, followerUsername){}

    getSubscriptions(username){}

    addSubscription(username, followee){
        return  this.assertUserExists(username)
                .then(function(){
                    return this.getFolloweeIndex(username, followee);
                }.bind(this))
                .then(function(followeeIndex){
                    if(followeeIndex==-1){
                        mockUsers[username].following.push(followee);
                    }
                }.bind(this))
    }

    deleteSubscription(username, followee){}

    getFolloweeIndex(username, followee){
        return  this.assertUserExists(username)
                .then(function(){
                    return mockUsers[username].following.indexOf(followee);
                }.bind(this));
    }

    addFollowee(followeeUsername, followerUsername){}

    deleteFollowee(followeeUsername, followerUsername){}

    getPremium(username){

    }

    addPremium(username, content){
        return  this.assertUserExists(username)
                .then(function(){
                    mockUsers[username].premiumContent.push(content);
                })
    }

    deletePremium(username, index){}
}

module.exports = new MockDatabaseService();

