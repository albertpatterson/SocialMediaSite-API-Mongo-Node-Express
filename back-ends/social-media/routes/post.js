const router = require('express').Router();
const sessionService = require("../services/sessionService");
// const databaseService = require('../services/mockDatabaseService');
const databaseService = require('../services/mongodbDatabaseService');
const Post = require('../services/Post');
const ParamAsserter = require("../utils/ParamAsserter");

router.use(sessionService.assertSession.bind(sessionService));

router.post("/", 
    
    function(req, res, next){
        new ParamAsserter(req, res, "body")
        .assertParam("username", "content")
        .finally(next);
        // if(!req.body.username){
        //     res.status(400).send('"username" must be provided')
        // }else if(!req.body.content){
        //     res.status(400).send('"content" must be provided')
        // }else{
        //     next();
        // }
    },

    function(req, res, next){
        let poster = req.body.username;
        let content = req.body.content;
        databaseService.addPost(poster, new Post(poster, content));
        res.status(201).end();
    })

router.get("/", 

    function(req, res, next){

        let paramAsserter = new ParamAsserter(req, res, "query");

        paramAsserter
        .assertParam("type")
        .then(function(){
            if(req.query.type === "followed"){
                paramAsserter.assertParam("username").finally(next);
            }else if(req.query.type === "own"){
                paramAsserter.assertParam("poster").finally(next);
            }else{
                paramAsserter.sendErrorMsgAndEnd('"type" must be either "own" or "followed"');
            }
        })

        // if(!req.query){
        //     res.status(400).send('"type" must be provided');
        // }
        // else if(!req.query.type){
        //     res.status(400).send('"type" must be provided');
        // }else if(req.query.type === "followed"){
        //     if(!req.query.username){
        //         res.status(400).send('"username" must be provided');
        //     }else{
        //         next();
        //     }
        // }else if(req.query.type === "own"){
        //     if(!req.query.poster){
        //         res.status(400).send('"poster" must be provided');
        //     }else{
        //         next();
        //     }
        // }else{
        //     res.status(400).send('"type" must be either "own" or "followed"');
        // }
    },

    function(req, res, next){
        let type = req.query.type;
        if(type==="own"){
            let poster = req.query.poster;
            
            databaseService.getOwnPosts(poster)
            .then(function(ownPosts){
                let dataObj = {data: ownPosts};
                res.type('application/json').status(200).json(dataObj);
            })
            .catch(function(err){
                console.log(err);
                res.status(500).send("Unable to retrieve posts.");
            })

        }else{
            let username = req.query.username;

            databaseService.getFollowedPosts(username)
            .then(function(followedPosts){
                followedPosts.sort((a,b)=>a.timestamp<b.timestamp)
                let dataObj = {data: followedPosts};
                res.type('application/json').status(200).json(dataObj);
            })
            .catch(function(err){
                console.log(err);
                res.status(500).send("Unable to retrieve posts.");
            })
        }
    })

router.delete("/",
    function(req, res, next){
        new ParamAsserter(res, res, "query")
        .assertParam("username", "index")
        .finally(next);

        // if(!req.query){
        //     res.status(400).send('"username" must be provided');
        // }else if(!req.query.username){
        //     res.status(400).send('"username" must be provided');
        // }else if(!req.query.index){
        //     res.status(400).send('"index" must be provided');
        // }else{
        //     next();
        // }
    },

    function(req, res, next){
        databaseService.deletePost(req.username, req.idx);
        res.status(204).end();
    })

module.exports = router;