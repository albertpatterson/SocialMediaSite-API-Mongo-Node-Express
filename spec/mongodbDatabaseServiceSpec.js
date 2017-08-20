const proxyquire = require('proxyquire');
const dbTestUrl = require("../../../private/socialMediaDatabasePrivateTestURL");
const mongodbDatabaseService = proxyquire("../services/mongodbDatabaseService",
    {
        "../../../private/socialMediaDatabasePrivateURL": dbTestUrl,
    });

const MockPersonalData = require("./utils/MockPersonalData");
const MockPost = require("./utils/MockPost");
const MockPremiumContent = require("./utils/MockPremiumContent");

describe("mongDatabaseService", function(){
    beforeAll(function(done){
        mongodbDatabaseService.connectToDatabase()
        .then(done);
    })

    afterAll(function(done){
        mongodbDatabaseService.closeDatabaseConnection()
        .then(done);
    })

    beforeEach(function(done){
        mongodbDatabaseService.clearDatabase()
        .then(done)
    })

    afterEach(function(done){
        mongodbDatabaseService.clearDatabase()
        .then(done);
    })

    it("should identify if a user exists via the 'checkUser' method", function(done){
        mongodbDatabaseService.checkUser("None Existent User")
        .then(exist=>expect(exist).toBe(false))
        .then(done)
    })

    it("should create a new user in the database via the 'addUser' method", function(done){
        const   username = "Bob";

        mongodbDatabaseService.checkUser(username)
        .then(exist=>expect(exist).toBe(false))
        .then(()=>addUser(username))
        .then(()=>mongodbDatabaseService.checkUser(username))
        .then(exist=>expect(exist).toBe(true))   
        .then(done);         
    })

    it("should return a promise resolved/rejected depending on if a user exists, via the 'assertUserExists' method", function(done){
        
        const username = "Bob";

        mongodbDatabaseService.assertUserExists(username)
        .then(()=>expect(true).toBe(false))
        .catch(()=>expect(true).toBe(true))
        .then(()=>addUser(username))
        .then(()=>mongodbDatabaseService.assertUserExists(username))
        .then(()=>expect(true).toBe(true))
        .catch(()=>expect(true).toBe(false))
        .then(done)
    })

    it("should remove a user via the 'deleteUser' method", done=>{
        const username = "Bob";
        addUser(username)
        .then(()=>mongodbDatabaseService.checkUser(username))
        .then(exist=>expect(exist).toBe(true))
        .then(()=>mongodbDatabaseService.deleteUser(username))
        .then(()=>mongodbDatabaseService.checkUser(username))
        .then(exist=>expect(exist).toBe(false))
        .then(done)
    })

    it("should find a user's personal data via the 'findPersonalData' method", done=>{
        const username = "Bob";
        addUser(username)
        .then(()=>mongodbDatabaseService.findPersonalData(username))
        .then(data=>expect(data.name).toBe(username))
        .then(done);
    })

    it("should find multiple users' personal data via the 'findPersonalDataMultiple' method", done=>{
        const   username1 = "Bob",
                username2 = "Bobby",
                username3 = "Pam",
                query = /^Bob.*/;

        addUser(username1)
        .then(()=>addUser(username2))
        .then(()=>addUser(username3))
        .then(()=>mongodbDatabaseService.findPersonalDataMultiple(query))
        .then(data=>{
            expect(data.length).toBe(2);
            let names = data.map(data=>data.name);
            expect(names.indexOf(username1)).not.toBe(-1);
            expect(names.indexOf(username2)).not.toBe(-1);
        })
        .then(done);
    })

    it("should update a user's personal data via the 'setPersonalData' method", done=>{
        const   username = "Bob",
                newLocation = "new location";

        addUser(username)
        .then(()=>mongodbDatabaseService.findPersonalData(username))
        .then(data=>{
            expect(data.location).toBe(username+"_location");
            return data
        })
        .then(data=>{
            data.location = newLocation;
            return mongodbDatabaseService.setPersonalData(username, data)
        })
        .then(()=>mongodbDatabaseService.findPersonalData(username))
        .then(data=>expect(data.location).toBe(newLocation))
        .then(done)
    })

    it("should return the user's password via the 'getPassword' method", done=>{
        const   username = "Bob",
                expPw = mockPassword(username);

        addUser(username)
        .then(()=>mongodbDatabaseService.getPassword(username))
        .then(pw=>expect(pw).toBe(expPw))
        .then(done)
    })

    it("should add posts via the 'addPost' method and retrieve them via the 'getOwnPosts' method", done=>{
        const   username = "Bob",
                post0 = new MockPost(username);

        addUser(username)
        .then(()=>mongodbDatabaseService.getOwnPosts(username))
        .then(posts=>expect(posts.length).toBe(0))
        .then(()=>mongodbDatabaseService.addPost(username,post0))
        .then(()=>mongodbDatabaseService.getOwnPosts(username))
        .then(posts=>expect(posts.length).toBe(1))
        .then(done)
    })

    it("should delete posts via the 'deletePost' method", done=>{
        const   username = "Bob",
                post0 = new MockPost(username);

        addUser(username)
        .then(()=>mongodbDatabaseService.getOwnPosts(username))
        .then(posts=>expect(posts.length).toBe(0))
        .then(()=>mongodbDatabaseService.addPost(username,post0))
        .then(()=>mongodbDatabaseService.getOwnPosts(username))
        .then(posts=>expect(posts.length).toBe(1))
        .then(()=>mongodbDatabaseService.deletePost(username,0))
        .then(()=>mongodbDatabaseService.getOwnPosts(username))
        .then(posts=>expect(posts.length).toBe(0))
        .then(done)
    })

    it("should add a follower/follow a user via the 'addSubscription' method", done=>{
        const   username1 = "Bob",
                username2 = "Bobby",
                post0 = new MockPost(username1);

        addUser(username1)
        .then(()=>addUser(username2))
        .then(()=>mongodbDatabaseService.getFollowedPosts(username2))
        .then(data=>expect(data.length).toBe(0))
        .then(()=>mongodbDatabaseService.addSubscription(username2, username1))
        .then(()=>mongodbDatabaseService.addPost(username1, post0))
        .then(()=>mongodbDatabaseService.getFollowedPosts(username2))
        .then(data=>expect(data.length).toBe(1))
        .then(done);
    })

    it("should add messages via the 'addMessage' method and retrieve them via the 'addMessage' method", done=>{
        const   username = "Bob",
                post0 = new MockPost(username);

        addUser(username)
        .then(()=>mongodbDatabaseService.getMessages(username))
        .then(messsages=>expect(messsages.length).toBe(0))
        .then(()=>mongodbDatabaseService.addMessage(username,post0))
        .then(()=>mongodbDatabaseService.getMessages(username))
        .then(messsages=>expect(messsages.length).toBe(1))
        .then(done)
    })

    it("should delete messages via the 'deleteMessage' method", done=>{
        const   username = "Bob",
                post0 = new MockPost(username);

        addUser(username)
        .then(()=>mongodbDatabaseService.getMessages(username))
        .then(messsages=>expect(messsages.length).toBe(0))
        .then(()=>mongodbDatabaseService.addMessage(username,post0))
        .then(()=>mongodbDatabaseService.getMessages(username))
        .then(messsages=>expect(messsages.length).toBe(1))
        .then(()=>mongodbDatabaseService.deleteMessage(username,0))
        .then(()=>mongodbDatabaseService.getMessages(username))
        .then(messsages=>expect(messsages.length).toBe(0))
        .then(done)
    })

    it("should add premium content via the 'addPremium' method and retrieve it via the 'getPremium' method", done=>{
        const   username = "Bob",
                premium0 = new MockPremiumContent();
        
        addUser(username)
        .then(()=>mongodbDatabaseService.getPremium(username))
        .then(premium=>expect(premium.length).toBe(0))
        .then(()=>mongodbDatabaseService.addPremium(username,premium0))
        .then(()=>mongodbDatabaseService.getPremium(username))
        .then(premium=>expect(premium.length).toBe(1))
        .then(done)
    })

    it("should delete premium content via the 'deletePremium' method", done=>{
        const   username = "Bob",
        premium0 = new MockPremiumContent();

        addUser(username)
        .then(()=>mongodbDatabaseService.getPremium(username))
        .then(premium=>expect(premium.length).toBe(0))
        .then(()=>mongodbDatabaseService.addPremium(username,premium0))
        .then(()=>mongodbDatabaseService.getPremium(username))
        .then(premium=>expect(premium.length).toBe(1))
        .then(()=>mongodbDatabaseService.deletePremium(username, 0))
        .then(()=>mongodbDatabaseService.getPremium(username))
        .then(premium=>expect(premium.length).toBe(0))
        .then(done)
    })
})

function addUser(username){
    const   personalData = new MockPersonalData(username);
            pw = mockPassword(username);

    return mongodbDatabaseService.addUser(username, personalData, pw);
}

function mockPassword(username){
    return username+"pw";
}




// const mongodbDatabaseService = require('../services/mongodbDatabaseService');
// const PersonalData = require("../services/PersonalData");
// const Post = require("../services/Post");


// mongodbDatabaseService.connect()
// // .then(()=>{
// //     let username = "test3"
// //     let personalData = new PersonalData(username, "loc", new Date(), "bus", "0.png");
// //     return mongodbDatabaseService.addUser(username, personalData, "testpw");
// // })
// // .then(()=>{
// //     let username = "test2"
// //     let personalData = new PersonalData(username, "new loc", new Date(), "new bus", "0.png");
// //     return mongodbDatabaseService.setPersonalData(username, personalData);
// // })
// .then(()=>{
//     let username = "test3"
//     let newPost = new Post(username,"more new info");
//     return mongodbDatabaseService.addPost(username, newPost);
// })
// .then(()=>{
//     let username = "test3"
//     return mongodbDatabaseService.findPersonalData(username)
//     .then(pd=>console.log('personaldata ', pd))
// })
// .then(()=>{
//     let username = "test3"
//     return mongodbDatabaseService.getOwnPosts(username)
//     .then(ops=>console.log('own posts: ', ops))
// })
// .then(()=>{
//     console.log('delete post 1')
//     let username = "test3"
//     return mongodbDatabaseService.deletePost(username,0)
// })
// .then(()=>{
//     let username = "test3"
//     return mongodbDatabaseService.getOwnPosts(username)
//     .then(ops=>console.log('own posts: ', ops))
// })
// .catch(e=>console.log(e))
// .then(mongodbDatabaseService.close)
// .catch(e=>console.log(e));
