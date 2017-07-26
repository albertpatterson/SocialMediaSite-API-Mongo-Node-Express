const router = require("express").Router();
const session = require("express-session");

let loginService = {
    signIn: function(req){
        let username = req.body.username;
        let password = req.body.password;
        if(password==="ok"){
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
        res.status("201");
        res.redirect(`/member/${req.body.username}`);
    }else{
        res.status("401").end();
    }
})

router.get("/", function(req, res, next){
    res.status("200").end();
})


module.exports = router;