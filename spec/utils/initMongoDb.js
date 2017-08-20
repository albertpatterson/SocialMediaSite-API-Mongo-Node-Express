const mongodbDatabaseService = require("../../services/mongodbDatabaseService")

// const User = require('../../services/User');
// const PersonalData = require('../../services/PersonalData');
// const Post = require('../services/Post');
// const PremiumContent = require('../services/PremiumContent');

const MockPersonalData = require("./MockPersonalData");
const MockPost = require("./MockPost");
const MockPremiumContent = require("./MockPremiumContent");


mongodbDatabaseService.connectToDatabase()
.then(()=>mongodbDatabaseService.clearDatabase())
.then(()=>addUser("Bob"))
.then(()=>addPost("Bob"))
.then(()=>addPost("Bob"))
.then(()=>addPremium("Bob"))
.then(()=>addPremium("Bob"))

.then(()=>addUser("Kim"))
.then(()=>addPost("Kim"))
.then(()=>addPremium("Kim"))

.then(()=>addUser("Pam"))
.then(()=>addPost("Pam"))
.then(()=>addPost("Pam"))
.then(()=>addPost("Pam"))
.then(()=>addPost("Pam"))

.then(()=>mongodbDatabaseService.addFollower("Pam","Bob"))
.then(()=>addMessage("Kim", "Pam"))
.then(()=>mongodbDatabaseService.closeDatabaseConnection())
.catch(e=>console.log(e));


function addMessage(recipient, sender){
    const post = new MockPost(sender);
    return mongodbDatabaseService.addMessage(recipient, post);
}

function addPremium(username){
    const premium = new MockPremiumContent();
    return mongodbDatabaseService.addPremium(username, premium);
}

function addPost(username){
    const post = new MockPost(username);
    return mongodbDatabaseService.addPost(username, post);
}

function addUser(username){
    const   personalData = new MockPersonalData(username);
            pw = mockPassword(username);

    return mongodbDatabaseService.addUser(username, personalData, pw);
}

function mockPassword(username){
    return username+"pw";
}