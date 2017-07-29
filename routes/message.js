const router = require('Express').Router();

const databaseService = require('../services/mockDatabaseService');
const sessionService = require('../services/sessionService');
const ParamAsserter = require("../utils/ParamAsserter");

const Post = require('../services/Post');


router.use(sessionService.assertSession.bind(sessionService));

router.post("/",
    function(req, res, next){
        new ParamAsserter(req, res, "body")
        .assertParam("username", "content", "recipient")
        .finally(next);
    },
    function(req, res, next){
        databaseService.addMessage(req.recipient, new Post(req.username, req.content));
        res.status(201).end();
    })

router.get("/",
    function(req, res, next){
        new ParamAsserter(req, res, "query")
        .assertParam("username")
        .finally(next);
    },
    function(req, res, next){
        databaseService.getMessages(req.query.username)
        .then(function(messages){
            let dataObj = {data: messages};
            res.status(200).type("application/json").json(dataObj);
        })
        .catch(function(err){
            console.log(err);
            res.status(500).send("Unable to retrieve messages.")
        })
    })

router.delete("/",
    function(req, res, next){
        new ParamAsserter(res, res, "query")
        .assertParam("username", "index")
        .finally(next);
    },
    function(req, res, next){
        databaseService.deleteMessage(req.username, req.idx);
        res.status(204).end();
    })



module.exports = router;