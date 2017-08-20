const session = require("express-session");
// const databaseService = require('./mockDatabaseService');
const databaseService = require('./mongodbDatabaseService');
let sessionService = {

    signIn: function(req){
        let username = req.body.username;
        let password = req.body.password;

        return new Promise(function(res, rej){
            databaseService.getPassword(username)
            .then(function(ExpectedPassword){
                if(password===ExpectedPassword){
                    req.session.username = username;
                    res(true);
                }else{
                    res(false);
                }
            })
            .catch(function(err){
                console.log(err);
                rej("Unable to retrieve password.");
            })
        })
    },

    isSignedIn: function(req){
        let inBody = req.body && req.body.username === req.session.username;
        let inQuery = req.query && req.query.username === req.session.username;
        return inBody || inQuery;
    },

    deleteSession: function(req){
        req.session = null;
    },

    assertSession: function(req, res, next){
        this.isSignedIn(req) ? next() : res.status(401).end();
    }
}

module.exports = sessionService