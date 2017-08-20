PremiumContent = require("../../services/PremiumContent");

let count = 0;
class MockPremiumContent extends PremiumContent{
    constructor(){
        super("static/1.png");
    }
}

module.exports = MockPremiumContent;