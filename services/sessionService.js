const session = require("express-session");
const mockDatabaseService = require('./mockDatabaseService');

let sessionService = {

    signIn: function(req){
        let username = req.body.username;
        let password = req.body.password;

        console.log('sign in');
        console.log(mockDatabaseService);
        console.log(mockDatabaseService.getPassword(username));
        
        if(password===mockDatabaseService.getPassword(username)){
            req.session.username = username;
            return true;
        }
        return false;
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