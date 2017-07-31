const router = require("Express").Router();
const multer = require("multer");

const sessionService = require("../services/sessionService");
const ParamAsserter = require("../utils/ParamAsserter");
const databaseService = require('../services/mockDatabaseService');
const PersonalData = require("../services/PersonalData");


const pictureUpload = multer({dest: "./dist/static"}).single("picture");

router.use(sessionService.assertSession.bind(sessionService));

router.post("/", 
    function(req, res, next){
        new ParamAsserter(req, res, "body")
        .assertParam("username", "password", "location", "DOB", "business", "picture")
        .finally(next);
    },
    function(req, res, next){
        let username = req.body.username;
        databaseService.checkUser(username)
        .then(function(userExists){
            if(userExists){
                res.status(409).send("username \"" + username+"\" already in use.");
            }else{
                next();
            }
        })
    },
    pictureUpload,
    function(req, res, next){
        let personalData = new PersonalData(
            req.username,
            req.location,
            req.DOB,
            req.business,
            req.file
        )

        databaseService.addUser(req.username, personalData, req.password)
        .then(function(){
            res.status(201).end();
        }.bind(this))
        .catch(function(err){
            console.log(err);
            res.status(500).send("Unable to create account.");
        }.bind(this))
    })

router.get("/", 
    function(req, res, next){
        let paramAsserter = new ParamAsserter(req, res, "query");

        paramAsserter
        .assertParam("username")
        .then(function(){
            if(!(req.query.desiredUserName || req.query.desiredUserQuery)){
                paramAsserter.sendErrorMsgAndEnd("Either \"desiredUserName\" or \"desiredUserQuery\" must be specified.");
            }
        }.bind(this))
        .finally(next);
    },
    function(req, res, next){
        let dataPromise;
        if(req.query.desiredUserName){
            dataPromise = databaseService.findPersonalData(req.query.desiredUserName);
        }else{
            dataPromise =   databaseService.findPersonalDataMultiple(req.query.desiredUserQuery)
                            .then(function(personalData){
                                return {data: personalData};
                            }.bind(this));
        }

        dataPromise
        .then(function(dataObj){
            res.status(200).type("application/json").json(dataObj);
        }.bind(this))
        .catch(function(err){
            console.log(err);
            res.status(500).send("Unable to retrieve personal data.");
        }.bind(this))
    },
    function(req, res, next){})

router.put("/", 
    function(req, res, next){},
    function(req, res, next){})

router.delete("/", 
    function(req, res, next){},
    function(req, res, next){})


module.exports = router;