module.exports = require("./startDatabaseAndInitialize")
  .then((socialMediaDatabaseService)=>require("./startServer"))
  .catch(e=>{throw e});
