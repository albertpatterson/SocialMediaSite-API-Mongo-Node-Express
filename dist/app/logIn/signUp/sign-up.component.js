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
var sign_up_service_1 = require("./../../services/sign-up.service");
/**
 * Component allowing users to sign up for a new account
 *
 * @export
 * @class SignUpComponent
 * @implements {OnInit}
 */
var SignUpComponent = (function () {
    function SignUpComponent(signUpService) {
        this.signUpService = signUpService;
        /**
         * event to be emitted when a user has signed up
         *
         * @type {EventEmitter<String>}
         * @memberof SignUpComponent
         */
        this.signedUpEvent = new core_1.EventEmitter();
        this.usernamePattern = "\\w{1,10}";
        this.usernameDiagnostic = "username must be alphanumeric and be between 1 and 10 characters";
        this.passwordPattern = "\\S{1,10}";
        this.passwordDiagnostic = "password must contain no white space and be between 1 and 10 characters";
        this.locationPattern = ".*";
        this.locationDiagnostic = "Your current location";
        this.DOBDiagnostic = "Your birth date";
        this.businessPattern = ".*";
        this.businessDiagnostic = "Your current business";
        this.pictureDiagnostic = "Your photo";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        // set the maximum DOB allowed in the sign up form to today's date
        this.DOBMax = this._getTodaysDate();
    };
    /**
     * Attempt to sign the user up for an account
     *
     * @memberof SignUpComponent
     */
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        console.log('call sign up service');
        this.signUpService.signUp(this.username, this.location, this.DOB, this.business, this.picture, this.password)
            .then(function () { console.log('response from sign up request ' + _this.username); _this.signedUpEvent.next(_this.username); })
            .catch(function (err) { return _this._handleSignUpError(err); });
    };
    /**
     * extract the user's photo from the form
     *
     * @param {*} event
     * @memberof SignUpComponent
     */
    SignUpComponent.prototype.addPicture = function (event) {
        this.picture = event.target.files[0];
    };
    /**
     * handle an error in the sign up attempt
     *
     * @private
     * @param {*} error
     * @memberof SignUpComponent
     */
    SignUpComponent.prototype._handleSignUpError = function (error) {
        console.log(error);
    };
    /**
     * get the current date
     *
     * @private
     * @returns {string}
     * @memberof SignUpComponent
     */
    SignUpComponent.prototype._getTodaysDate = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return year + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day);
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'sign-up',
        outputs: ["signedUpEvent"],
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
    }),
    __metadata("design:paramtypes", [sign_up_service_1.SignUpService])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map