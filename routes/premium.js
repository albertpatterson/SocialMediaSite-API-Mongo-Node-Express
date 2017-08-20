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
        .assertParam("username", "content")
        .finally(next);
    },
    function(req, res, next){
        let newContent = new premiumContent(req.body.content);

        databaseService.addPremium(req.body.username, newContent)
        .then(()=>res.status(201).end())
        .catch(err=>{
            console.log(err); 
            res.status(500).send("Unable to add content.");
        });
    });

router.get("/",
    function(req, res, next){
        new ParamAsserter(req, res, "query")
        .assertParam("username")
        .finally(next);
    },
    function(req, res, next){
        databaseService.getPremium(req.query.username)
        .then(premiumItems=>{
            let dataObj = {data: premiumItems};
            res.status(200).type("application/json").json(dataObj);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).send("Unable to get premium items");
        })

    });

router.delete("/",
    function(req, res, next){
        new ParamAsserter(req, res, "query")
        .assertParam("username", "index")
        .finally(next);
    },
    function(req, res, next){
        databaseService.deletePremium(req.query.username, req.query.index)
        .then(()=>res.status(204).end())
        .catch(err=>{
            console.log(err);
            res.status(500).send("Unable to delete premium item");
        })
    });

module.exports = router;