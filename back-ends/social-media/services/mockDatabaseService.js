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

    addUser(username, personalData, password){
        return new Promise((res, rej)=>{
            mockUsers[username] = new MockUser(username);
            mockUsers[username].personalData = personalData;
            mockUsers[username].password = password;
            mockUsernames.push(username);
            res();
        })
    }

    checkUser(username){
        return Promise.resolve(mockUsernames.indexOf(username)!=-1);
    }

    assertUserExists(username){
        console.log('assert ', username);
        return new Promise(function(res, rej){
                    mockUsers.hasOwnProperty(username) ? res() : rej();
                }.bind(this));
    }

    deleteUser(username){}

    findPersonalData(username){
        return  this.assertUserExists(username)
                .then(()=>mockUsers[username].personalData);
    }

    findPersonalDataMultiple(query){
        return  new Promise((res, req)=>{
            let reqExp = new RegExp(query);
            res(mockUsernames.filter(n=>n.match(reqExp)).map(n=>mockUsers[n].personalData));
        })
    }

    setPersonalData(username, personalData){
        return  this.assertUserExists(username)
                .then(function(){ 
                    return mockUsers[username].personalData = personalData;
                }.bind(this));        
    }

    getPassword(username){   
        return  mockUserCreation
                .then(function(){
                    return this.assertUserExists(username);
                }.bind(this))
                .then(function(){
                    return mockUsers[username].password;
                })
    }

    setPassword(username, password){
        return  this.assertUserExists(username)
            .then(function(){ 
                return mockUsers[username].password = password;
            }.bind(this));
    }

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

    deleteMessage(username, idx){
        return  this.assertUserExists(username)
                .then(()=>new Promise(
                            (res, rej)=>{
                                if(mockUsers[username].messages.length > idx){
                                    mockUsers[username].messages.splice(idx,1);
                                    res();
                                }else{
                                    rej("Message #"+idx+" does not exist");
                                }
                            }
                        )
                    );
    }

    addFollower(followeeUsername, followerUsername){
        return  this.assertUserExists(followeeUsername)
                .then(()=>this.assertUserExists(followerUsername))
                .then(()=>{
                    if(mockUsers[followeeUsername].followedBy.indexOf(followerUsername)==-1){
                        mockUsers[followeeUsername].followedBy.push(followerUsername);
                        mockUsers[followerUsername].following.push(followeeUsername);
                    } 
                });
    }

    deleteFollower(followeeUsername, followerUsername){
        return  this.assertUserExists(followeeUsername)
                .then(()=>this.assertUserExists(followerUsername))
                .then(()=>{
                    let followerIdx = mockUsers[followeeUsername].followedBy.indexOf(followerUsername);
                    if(followerIdx!=-1){
                        mockUsers[followeeUsername].followedBy.splice(followerIdx, 1);
                    } 

                    let followeeIdx = mockUsers[followerUsername].following.indexOf(followeeUsername);
                    if(followeeIdx!=-1){
                        mockUsers[followreUsername].following.splice(followeeIdx, 1);
                    } 
                });
    }

    getSubscriptions(username){
        return  this.assertUserExists(username)
                .then(()=>mockUsers[followreUsername].following);
    }

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

    // deleteSubscription(username, followee){
    // }

    getFolloweeIndex(username, followee){
        return  this.assertUserExists(username)
                .then(function(){
                    return mockUsers[username].following.indexOf(followee);
                }.bind(this));
    }

    // addFollowee(followeeUsername, followerUsername){
    // }

    deleteFollowee(followeeUsername, followerUsername){
        return this.deleteFollower(followeeUsername, followerUsername);
    }

    getPremium(username){
       return  this.assertUserExists(username)
                .then(()=>mockUsers[username].premiumContent);
    }

    addPremium(username, content){
        return  this.assertUserExists(username)
                .then(()=>mockUsers[username].premiumContent.push(content))
    }

    deletePremium(username, idx){
        return  this.assertUserExists(username)
                .then(()=>new Promise(
                            (res, rej)=>{
                                if(mockUsers[username].premiumContent.length > idx){
                                    mockUsers[username].premiumContent.splice(idx,1);
                                    res();
                                }else{
                                    rej("Premium Item #"+idx+" does not exist");
                                }
                            }
                        )
                    );
    }
}

module.exports = new MockDatabaseService();

