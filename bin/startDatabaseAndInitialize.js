const startDatabase = require("./startDatabase");
const PersonalData = require("../back-ends/social-media/services/PersonalData");
const Post = require("../back-ends/social-media/services/Post");
const hashString = require("../back-ends/social-media/utils/hashString");
const fs = require("fs");
const path = require("path");
const botNames = ["Bot1", "Bot2", "Bot3"];
const guestName = "guest";
const exampleUserNames = [guestName, ...botNames];

module.exports = startDatabase
  .then((socialMediaDatabaseService) => setupDatabase(socialMediaDatabaseService))
  .then(()=>console.log("setup database"))
  .catch(e=>{console.error("setup database failed"); throw e});


function setupDatabase(socialMediaDatabaseService) {
  return socialMediaDatabaseService.clearDatabase()
    .then(() => {
      return Promise.all(exampleUserNames.map(exampleUserName => addExampleUser(socialMediaDatabaseService, exampleUserName)));
    })
    .then(() => {
      return Promise.all(botNames.map(botName => addBotPost(socialMediaDatabaseService, botName)));
    })
    .then(() => {
      return Promise.all(botNames.map(botName => addBotMessage(socialMediaDatabaseService, botName)));
    })
}

function addExampleUser(socialMediaDatabaseService, name){
  const personalData = new PersonalData(name, `${name}'s location`, new Date(), `${name}'s business`, `${name}.png`);
  const passHash = hashString(hashString(name));

  return socialMediaDatabaseService
    .addUser(name, personalData, passHash)
    .then(()=>console.log(`${name} added`));
}

function addBotPost(socialMediaDatabaseService, name){
  const post = new Post(name, `${name} welcomes all humans.`);
  return socialMediaDatabaseService.addPost(name, post);
}

function addBotMessage(socialMediaDatabaseService, name){
  const post = new Post(name, `${name} welcomes you`);
  return socialMediaDatabaseService.addMessage(guestName, post);
}