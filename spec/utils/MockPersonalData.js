PersonalData = require("../../services/PersonalData");

class MockPersonalData extends PersonalData{
    constructor(username){
        super(  username,
                username + "_location",
                new Date(),
                username + "_business",
                "static/0.png");
    }
}

module.exports = MockPersonalData;