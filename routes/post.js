const router = require('express').Router();
const sessionService = require("../services/sessionService");
const databaseService = require('../services/mockDatabaseService');
const Post = require('../services/Post');

router.use(sessionService.assertSession.bind(sessionService));

router.post("/", 
    
    function(req, res, next){
        if(!req.body.username){
            res.status(400).send('"username" must be provided')
        }else if(!req.body.content){
            res.status(400).send('"content" must be provided')
        }else{
            next();
        }
    },

    function(req, res, next){
        let poster = req.body.username;
        let content = req.body.content;
        databaseService.addPost(poster, new Post(poster, content));
        res.status(201).end();
    })

router.get("/", 

    function(req, res, next){
        if(!req.query){
            res.status(400).send('"type" must be provided');
        }
        else if(!req.query.type){
            res.status(400).send('"type" must be provided');
        }else if(req.query.type === "followed"){
            if(!req.query.username){
                res.status(400).send('"username" must be provided');
            }else{
                next();
            }
        }else if(req.query.type === "own"){
            if(!req.query.poster){
                res.status(400).send('"poster" must be provided');
            }else{
                next();
            }
        }else{
            res.status(400).send('"type" must be either "own" or "followed"');
        }
    },

    function(req, res, next){
        let type = req.query.type;
        if(type==="own"){
            let poster = req.query.poster;
            let dataObj = {data: databaseService.getOwnPosts(poster)};
            res.type('application/json').status(200).json(dataObj);
        }else{
            let username = req.query.username;
            let dataObj = {data: databaseService.getFollowedPosts(username)};
            res.type('application/json').status(200).json(dataObj);
        }
    })

router.delete("/", function(req, res, next){
    
})

module.exports = router;