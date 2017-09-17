const MongoClient = require('mongodb').MongoClient;
// const privateDbUrl = require('../../../private/socialMediaDatabasePrivateURL');
const privateDbUrl = require('../../../../private/psmaMongodbUrl.js');

const User = require('./User');
const Post = require('./Post');
const PremiumContent = require('./PremiumContent');
const PersonalData = require("./PersonalData");

// the database currently connected to and corresponding documents
var db = null,
    users = null;

class MongodbDatabaseService{

    /**
     * connect to the database
     * 
     * @returns Promise<> resolved once the connection is established
     * @memberof MongodbDatabaseService
     */
    connectToDatabase(){
        if(db){
            console.log('Already connected to database.');
            return Promise.resolve();
        }

        
        return MongoClient.connect(privateDbUrl)
        .then((connectedDb)=>{
            console.log("Connected to database.");
            db=connectedDb;
            users = db.collection("users");
        })
    }

    /**
     * close the connection to the database
     * 
     * @returns Promise<> resolved once the connection is closed
     */
    closeDatabaseConnection(){
        if(!db){
            console.log('not connected to database.');
            return Promise.resolve();
        }

        return db.close()
        .then(()=>{
            console.log("Closed connected to database.");
            db=null;
            users = null;
        })
    }

    clearDatabase(){
        return users.deleteMany()
        .then(users = db.collection('users'));
    }

    /**
     * add a new user
     * 
     * @param {string} username 
     * @param {PersonalData} personalData
     * @param {string} password
     * @returns Promise<> resolved once the database is updated
     * @memberof MongodbDatabaseService
     */
    addUser(username, personalData, password){
        return new Promise((res, rej)=>{
            this.checkUser(username)
            .then(exists=>{
                if(exists){
                    rej(`username "${username}" already exists.`);
                }else{
                    let newUser = new User(username, personalData, password);
                    users.insertOne(newUser)
                    .then(res);
                }
            })
        })
    }

    checkUser(username){
        return new Promise((res, rej)=>{
            users.find({username:username}).limit(1).nextObject()
            .then(user=>res(!!user))
            .catch(e=>rej(e));
        })
    }

    assertUserExists(username){
        return new Promise((res, rej)=>{
            this.checkUser(username)
            .then(exist=>exist ? res() : rej());
        })
    }

    deleteUser(username){
        return users.deleteOne({name: username}).then(()=>{});
    }


    _findUser(username){
        return users.find({name:username}).limit(1).nextObject();
    }

    _findUserProperty(username, property){
        return this._findUser(username)
        .then(user=>user[property]);
    }

    _updateUser(username, update){
        return users.updateOne({name:username}, update).then(()=>{});
    }

    findPersonalData(username){
        return this._findUserProperty(username, "personalData");
    }

    findPersonalDataMultiple(jsRegexp){
        return new Promise((res, rej)=>{
            const query = {name: {$regex: jsRegexp}};
            users.find(query)
            .toArray((err, docs)=>err?rej(err):res(docs.map(d=>d.personalData)));
        })
    }

    setPersonalData(username, personalData){
        let update = {personalData};
        return users.updateOne({name:username}, {$set:update}).then(()=>{});
    }

    getPassword(username){
        return this._findUserProperty(username, "password");
    }

    setPassword(username, password){
        let update = {password};
        return users.updateOne({name:username}, {$set:update}).then(()=>{});
    }

    getOwnPosts(username){
        return this._findUserProperty(username, "ownPosts");
    }

    getFollowedPosts(username){
        return new Promise((res, rej)=>{
            let followedPosts = [];
            
            this._findUserProperty(username, "following")
            .then(followees=>{
                return followees.map(followee=>{
                    return this._findUserProperty(followee, 'ownPosts')
                    .then(followeePosts=>followedPosts.push.apply(followedPosts, followeePosts));
                })
            })
            .then(getFolloweePostProms=>{
                Promise.all(getFolloweePostProms)
                .then(()=>res(followedPosts))
            })
        })
    }

    addPost(username, post){
        return this._findUserProperty(username, "_newPostIdx")
        .then(idx=>{
            post.idx = idx;
            let update = {$push: {ownPosts: post}, $set: {_newPostIdx: ++idx}};
            return this._updateUser(username, update);
        })
    }

    deletePost(username, idx){
        let update = {$pull: {ownPosts: {idx}}};
        return this._updateUser(username, update).then(()=>{});
    }

    getMessages(username){
        return this._findUserProperty(username, "messages");
    }

    addMessage(recipient, message){
        return this._findUserProperty(recipient, "_newMessageIdx")
        .then(idx=>{
            message.idx = idx;
            let update = {$push: {messages: message}, $set: {_newMessageIdx: ++idx}};
            return this._updateUser(recipient, update);
        })
    }

    deleteMessage(username, idx){
        let update = {$pull: {messages: {idx}}};
        return this._updateUser(username, update).then(()=>{});
    }

    // addFollower(followeeUsername, followerUsername){
    //     let followeeUpdate = {$push: {followedBy: followerUsername}};
    //     let updateFolloee = this._updateUser(followeeUsername, followeeUpdate);

    //     let followerUpdate = {$push: {following: followeeUsername}};
    //     let updateFollower = this._updateUser(followerUsername, followerUpdate);

    //     return Promise.all([updateFolloee, updateFollower]);
    // }

    deleteFollower(followeeUsername, followerUsername){}

    getSubscriptions(username){
        return this._findUserProperty(username, "following");
    }

    addSubscription(username, followee){
        let followeeUpdate = {$push: {followedBy: username}};
        let updateFolloee = this._updateUser(followee, followeeUpdate);

        let followerUpdate = {$push: {following: followee}};
        let updateFollower = this._updateUser(username, followerUpdate);

        return Promise.all([updateFolloee, updateFollower]);
    }

    getFolloweeIndex(username, followee){}

    deleteFollowee(followeeUsername, followerUsername){}

    getPremium(username){
        return this._findUserProperty(username, "premiumContent");
    }

    addPremium(username, content){
        return this._findUserProperty(username, "_newPremiumContentIdx")
        .then(idx=>{
            content.idx = idx;
            let update = {$push: {premiumContent: content}, $set: {_newPremiumContentIdx: ++idx}};
            return this._updateUser(username, update);
        })
    }

    deletePremium(username, idx){
        let update = {$pull: {premiumContent: {idx}}};
        return this._updateUser(username, update).then(()=>{});
    }
}

module.exports = new MongodbDatabaseService();