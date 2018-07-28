module.exports = require("./startDatabase")
  .then((socialMediaDatabaseService)=>require("./startServer"))
  .catch(e=>{throw e});

