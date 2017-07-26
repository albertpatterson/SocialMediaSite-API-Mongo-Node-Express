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
var MessageFormComponent = (function () {
    function MessageFormComponent() {
        this.postSubmitted = new core_1.EventEmitter();
    }
    MessageFormComponent.prototype.submitPost = function () {
        this.postSubmitted.emit(this.postContent);
        this.postContent = "";
    };
    return MessageFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MessageFormComponent.prototype, "rows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MessageFormComponent.prototype, "label", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MessageFormComponent.prototype, "postSubmitted", void 0);
MessageFormComponent = __decorate([
    core_1.Component({
        selector: 'message-form',
        templateUrl: "./message-form.component.html",
        styleUrls: ['./message-form.component.css']
    })
], MessageFormComponent);
exports.MessageFormComponent = MessageFormComponent;
//# sourceMappingURL=message-form.component.js.map