const router = require("express").Router();
const session = require("express-session");
const mockDatabaseInterface = require('../data/mockDatabaseInterface');

let loginService = {
    signIn: function(req){
        let username = req.body.username;
        let password = req.body.password;

        console.log('sign in');
        console.log(mockDatabaseInterface);
        console.log(mockDatabaseInterface.getPassword(username));
        
        if(password===mockDatabaseInterface.getPassword(username)){
            req.session.username = username;
            return true;
        }
        return false;
    },

    isSignedIn: function(req){
        return req.username = res.session.username;
    }
}


router.post("/", function(req, res, next){
    let signInOk = loginService.signIn(req);
    if(signInOk){
        res.status("201").end();
    }else{
        res.status("401").end();
    }
})

router.get("/", function(req, res, next){
    res.status("200").end();
})


module.exports = router;