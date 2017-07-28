const router = require("express").Router();
const session = require("express-session");
const sessionService = require("../services/sessionService");


router.post("/", function(req, res, next){
    let signInOk = sessionService.signIn(req);
    if(signInOk){
        res.status("201").end();
    }else{
        res.status("401").end();
    }
})

router.get("/", function(req, res, next){
    if(sessionService.isSignedIn(req)){
        res.status("200").end();
    }else{
        res.status("401").end();
    }
})


module.exports = router;