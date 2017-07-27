const Post = require('./Post');
const PremiumContent = require('./PremimContent');


let connected = false;

let mockUsers = {};

let imgCount = 0;
function imageInc(){
    let img =  `static/${imgCount}.png`;
    imgCount = imgCount++%20;
    return img;
}

function MockPersonalData(username){
    this.name=username;
    this.location = username + "_location";
    this.DOB = new Date();
    this.business = username + "_business";
    this.picture = imageInc();
}

function MockUser(username){
    this.username = username;
    this.password = username+"pw";
    this.personalData = new MockPersonalData(username);
    this.ownPosts = [];
    this.messages = [];
    this.followedBy = [];
    this.following = [];
    this.premiumContent = [];
}


class MockDatabaseInterface{
    
    constructor(){

        let mockUsernames = ["Anne", "Kim", "Dan", "Bob", "Pam", "Jen"];

        let mockUsername, mockUser;

        const NFRIENDS = 2;
        for(let idx=0; idx<mockUsernames.length; idx++){

            mockUsername = mockUsernames[idx];
            mockUser = new MockUser(mockUsername);
            mockUsers[mockUsername] = mockUser;

            addPost(mockUserName, new Post(mockUserName, "Post 1"));
            addPost(mockUserName, new Post(mockUserName, "Post 2"));

            addPremium(mockUserName, new PremiumContent(imageInc()));
            addPremium(mockUserName, new PremiumContent(imageInc()));

            for(friendOffset = 1; friendOffset<=nFriends; friendOffset++){
                friendIdx = (idx + friendOffset) % mockUserNames.length();
                friendName = mockUserNames[friendIdx];
                addMessage(mockUserName, new Post(friendName, "Post from friend"));
                addSubscription(mockUserName, friendName);
            }
        }
    }    
    
    connect(){}

    close(){}

    addUser(username, personalData, password){}

    checkUser(username){}

    assertUserExists(username){
        if(!mockUsers.hasOwnProperty(username)){
            throw new Error(`user "${username}" does not exist`);
        }
    }

    deleteUser(username){}

    findPersonalData(username){}

    findPersonalDataMultiple(query){}

    setPersonalData(username, personalData){}

    getPassword(username){}

    setPassword(username, password){}

    getOwnPosts(username){}

    getFollowedPosts(username){}

    addPost(username, post){
        this.assertUserExists(username);
        mockUsers[username].ownPosts.push(post);
    }

    deletePost(username, idx){}

    getMessages(username){}

    addMessage(recipient, message){
        this.assertUserExists(recipient);
        mockUsers[recipient].messages.push(message);
    }

    deleteMessage(username, idx){}

    addFollower(followeeUsername, followerUsername){}

    deleteFollower(followeeUsername, followerUsername){}

    getSubscriptions(username){}

    addSubscription(username, followee){
        this.assertUserExists(username);
        if(getFolloweeIndex(username, followee)==-1){
            userData[username].following.push(followee);
        }
    }

    deleteSubscription(username, followee){}

    getFolloweeIndex(username, followee){
        return userData[username].following.indexOf(followee);
    }

    addFollowee(followeeUsername, followerUsername){}

    deleteFollowee(followeeUsername, followerUsername){}

    getPremium(username){

    }

    addPremium(username, content){
        this.assertUserExists(username);
        mockUsers[username].premiumContent.push(content);
    }

    deletePremium(username, index){}
}

module.exports = new MockDatabaseInterface();

