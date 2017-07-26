"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var personal_data_service_1 = require("./../services/personal-data.service");
var post_service_1 = require("../services/post.service");
var message_service_1 = require("./../services/message.service");
var subscription_service_1 = require("./../services/subscription.service");
/**
 * Component that displays a user's profile
 *
 * @export
 * @class ProfileComponent
 * @implements {OnInit}
 */
var ProfileComponent = (function () {
    /**
     * Creates an instance of ProfileComponent.
     * @param {PersonalDataService} personalDataService
     * @param {PostService} postService
     * @param {MessageService} messageService
     * @param {SubscriptionService} subscriptionService
     * @memberof ProfileComponent
     */
    function ProfileComponent(personalDataService, postService, messageService, subscriptionService) {
        this.personalDataService = personalDataService;
        this.postService = postService;
        this.messageService = messageService;
        this.subscriptionService = subscriptionService;
    }
    /**
     * get the personal data and posts of the profiled user in init
     *
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.ngOnInit = function () {
        console.log('otherName', this.profileUsername);
        this.personalDataService.getUserData(this.username, this.profileUsername)
            .then(function (profileUserData) {
            this.profileUserData = profileUserData;
            this.postService.getOwnPosts(this.username, this.profileUsername)
                .then(function (profilePosts) {
                this.profilePosts = profilePosts;
            }.bind(this));
        }.bind(this));
    };
    /**
     * send a message to the profiled user
     *
     * @param {string} message - the content of the message to send
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.sendMessage = function (message) {
        alert(message);
        this.messageService.addMessage(this.username, message, this.profileUsername)
            .then(function () { return alert("Message Sent!"); });
    };
    /**
     * subscribe to posts by this user
     *
     * @private
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.subscribe = function () {
        this.subscriptionService.addSubscription(this.username, this.profileUsername)
            .then(function () { return alert("Subscribed!"); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'member-profile',
        inputs: ['username', 'profileUsername'],
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    }),
    __metadata("design:paramtypes", [personal_data_service_1.PersonalDataService,
        post_service_1.PostService,
        message_service_1.MessageService,
        subscription_service_1.SubscriptionService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map