const mongodbDatabaseService = require('../services/mongodbDatabaseService');
const PersonalData = require("../services/PersonalData");
const Post = require("../services/Post");


mongodbDatabaseService.connect()
// .then(()=>{
//     let username = "test2"
//     let personalData = new PersonalData(username, "loc", new Date(), "bus", "0.png");
//     return mongodbDatabaseService.addUser(username, personalData, "testpw");
// })
// .then(()=>{
//     let username = "test2"
//     let personalData = new PersonalData(username, "new loc", new Date(), "new bus", "0.png");
//     return mongodbDatabaseService.setPersonalData(username, personalData);
// })
.then(()=>{
    let username = "test2"
    let newPost = new Post(username,"more new info");
    return mongodbDatabaseService.addPost(username, newPost);
})
.then(()=>{
    let username = "test2"
    return mongodbDatabaseService.findPersonalData(username)
    .then(pd=>console.log('personaldata ', pd))
})
.then(()=>{
    let username = "test2"
    return mongodbDatabaseService.getOwnPosts(username)
    .then(ops=>console.log('own posts: ', ops))
})
.catch(e=>console.log(e))
.then(mongodbDatabaseService.close)
.catch(e=>console.log(e));
