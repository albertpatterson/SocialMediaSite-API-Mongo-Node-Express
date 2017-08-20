const router = require('express').Router();

const sessionService = require("../services/sessionService");
// const databaseService = require('../services/mockDatabaseService');
const databaseService = require('../services/mongodbDatabaseService');
const ParamAsserter = require("../utils/ParamAsserter");
const PermiumContent = require("../services/PremiumContent");


router.use(sessionService.assertSession.bind(sessionService));


router.post("/",
    function(req, res, next){
        new ParamAsserter(req, res, "body")
        .assertParam("username", "followee")
        .finally(next);
    },
    function(req, res, next){
        databaseService.addSubscription(req.body.username, req.body.followee)
        .then(()=>res.status(201).end())
        .catch((err)=>{
            console.log(err);
            res.status(500).send("Could not subscribe");
        })
    })

router.get("/",
    function(req, res, next){
        new ParamAsserter(req, res, "query")
        .assertParam("username")
        .finally(next);
    },
    function(req, res, next){
        databaseService.getSubscriptions(req.query.username)
        .then(subs=>{
            let dataObj = {data: subs};
            res.status(200).type("application/json").json(dataObj);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).send("Unable to get subscriptions");
        })
    })

router.delete("/",
    function(req, res, next){
        new ParamAsserter(req, res, "query")
        .assertParam("username", "followee")
        .finally(next);
    },
    function(req, res, next){
        databaseService.deleteSubscription(req.query.username, req.query.followee)
        .then(()=>res.status(204).end())
        .catch(err=>{
            console.log(err);
            res.status(500).send("Unable to delete subscription");
        })        
    })


module.exports = router;