const socialMediaDatabaseService = require("../back-ends/social-media/services/mongodbDatabaseService");

module.exports = socialMediaDatabaseService.connectToDatabase().then(()=>socialMediaDatabaseService);