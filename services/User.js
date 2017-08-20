class User{
    constructor(username, personalData, password){
        this.name = username;
        this.username = username;
        this.password = password;
        this.personalData = personalData || new PersonalData();
        this.ownPosts = [];
        this.messages = [];
        this.followedBy = [];
        this.following = [username];
        this.premiumContent = [];
        this._newPostIdx = 0;
        this._newMessageIdx = 0;
        this._newPremiumContentIdx = 0;
    }
}

module.exports = User;