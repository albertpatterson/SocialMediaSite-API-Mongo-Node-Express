const MongoClient = require('mongodb').MongoClient;
const privateDbUrl = require('../../../private/socialMediaDatabasePrivateURL');

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
    connect(){
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
    close(){
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

    deleteUser(username){}


    _findUser(username){
        return users.find({name:username}).limit(1).nextObject();
    }

    _findUserProperty(username, property){
        return this._findUser(username)
        .then(user=>user[property]);
    }

    _updateUser(username, update){
        return users.update({name:username}, update).then(()=>{});
    }

    findPersonalData(username){
        return this._findUserProperty(username, "personalData");
    }

    findPersonalDataMultiple(query){
        return users.find({name: query});
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

    getFollowedPosts(username){}

    addPost(username, post){
        let update = {$push: {ownPosts: post}};
        return this._updateUser(username, update);
    }

    deletePost(username, idx){}

    getMessages(username){
        return this._findUserProperty(username, "messages");
    }

    addMessage(recipient, message){
        let update = {$push: {messages: message}};
        return this._updateUser(username, update);
    }

    deleteMessage(username, idx){}

    addFollower(followeeUsername, followerUsername){
        let followeeUpdate = {$push: {followedBy: followerUsername}};
        let updateFolloee = this._updateUser(followeeUsername, followeeUpdate);

        let followerUpdate = {$push: {following: followeeUsername}};
        let updateFollower = this._updateUser(followerUsername, followerUpdate);

        return Promise.all([updateFolloee, updateFollower]);
    }

    deleteFollower(followeeUsername, followerUsername){}

    getSubscriptions(username){
        return this._findUserProperty(username, "following");
    }

    addSubscription(username, followee){

    }

    getFolloweeIndex(username, followee){}

    deleteFollowee(followeeUsername, followerUsername){}

    getPremium(username){
        return this._findUserProperty(username, "premiumContent");
    }

    addPremium(username, content){}

    deletePremium(username, idx){}
}

module.exports = new MongodbDatabaseService();