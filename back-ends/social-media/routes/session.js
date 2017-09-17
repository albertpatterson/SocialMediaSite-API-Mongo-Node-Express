const router = require("express").Router();
const session = require("express-session");

const sessionService = require("../services/sessionService");

const ParamAsserter = require("../utils/ParamAsserter");

router.post("/", 

    function(req, res, next){
        new ParamAsserter(req, res, "body")
        .assertParam("username", "password")
        .finally(next);
    },

    function(req, res, next){

        sessionService.signIn(req)
        .then(function(validCredentials){
            if(validCredentials){
                res.status(201).end();
            }else{
                res.status(401).end();
            }
        })
        .catch(function(err){
            console.log(err);
            res.status(500).send("Unable to sign in.")
        })
    })

router.get("/", function(req, res, next){
    if(sessionService.isSignedIn(req)){
        res.status("200").end();
    }else{
        res.status("401").end();
    }
})


router.delete("/",
    sessionService.assertSession.bind(sessionService),
    function(req, res, next){
        try{
            sessionService.deleteSession(req);
            res.status(204).end();
        }catch(err){
            res.status(500).send("Unable to delete session.");
        }
    })


module.exports = router;