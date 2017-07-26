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
var message_service_1 = require("./../services/message.service");
/**
 * Component used to display messages
 *
 * @export
 * @class MessagesComponent
 */
var MessagesComponent = (function () {
    /**
     * Creates an instance of MessagesComponent.
     * @param {MessageService} messageService
     * @memberof MessagesComponent
     */
    function MessagesComponent(messageService) {
        this.messageService = messageService;
        /**
         * event emitted when a user is selected from the messages component
         *
         * @private
         * @type {EventEmitter<string>}
         * @memberof MessagesComponent
         */
        this.userSelect = new core_1.EventEmitter();
    }
    /**
     * update the messages on init
     *
     * @memberof MessagesComponent
     */
    MessagesComponent.prototype.ngOnInit = function () {
        this.messageService.getMessages(this.username)
            .then(function (messages) {
            this.messages = messages;
        }.bind(this));
    };
    /**
     * select a user
     *
     * @private
     * @param {string} selectedUserName - the username of the user to select
     * @memberof MessagesComponent
     */
    MessagesComponent.prototype.selectUser = function (selectedUserName) {
        this.userSelect.next(selectedUserName);
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    core_1.Component({
        selector: 'member-messages',
        inputs: ['username'],
        outputs: ['userSelect'],
        templateUrl: './messages.component.html',
        styleUrls: [
            './messages.component.css'
        ]
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessagesComponent);
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map