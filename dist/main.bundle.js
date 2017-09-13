webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logIn_log_in_component__ = __webpack_require__("../../../../../src/app/logIn/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member_member_component__ = __webpack_require__("../../../../../src/app/member/member.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {SignInComponent} from './signIn/sign-in.component';



var routes = [
    { path: 'member/:ownName', component: __WEBPACK_IMPORTED_MODULE_4__member_member_component__["a" /* MemberComponent */] },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_2__logIn_log_in_component__["a" /* LogInComponent */] },
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        template: "\n    <h1>Primative Social Medial</h1>\n    <router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__member_member_module__ = __webpack_require__("../../../../../src/app/member/member.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logIn_log_in_component__ = __webpack_require__("../../../../../src/app/logIn/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logIn_signIn_sign_in_component__ = __webpack_require__("../../../../../src/app/logIn/signIn/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logIn_signUp_sign_up_component__ = __webpack_require__("../../../../../src/app/logIn/signUp/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_sign_up_service__ = __webpack_require__("../../../../../src/app/services/sign-up.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { SignInComponent } from './signIn/sign-in.component';





// import { AuthService } from './services/mock_auth.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__member_member_module__["a" /* MemberModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_8__logIn_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_9__logIn_signIn_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_10__logIn_signUp_sign_up_component__["a" /* SignUpComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__services_sign_up_service__["a" /* SignUpService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/logIn/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logIn/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <h2>Sign In</h2>\r\n        <sign-in (signedInEvent)=\"goHome($event)\"></sign-in>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <h2>Sign up</h2>\r\n        <sign-up (signedUpEvent)=\"goHome($event)\"></sign-up>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/logIn/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component showing the log-in and sign-up forms, which routes the user to their home page after signing in
 *
 * @export
 * @class LogInComponent
 */
var LogInComponent = (function () {
    function LogInComponent(router) {
        this.router = router;
    }
    // navigate the user to their home page
    LogInComponent.prototype.goHome = function (username) {
        console.log("go home " + username);
        this.router.navigate(["member", username]);
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "log-in",
        template: __webpack_require__("../../../../../src/app/logIn/log-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logIn/log-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LogInComponent);

var _a;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/logIn/signIn/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logIn/signIn/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signInFormContainer\">\r\n    <form #signInForm=\"ngForm\" \r\n            (ngSubmit)=\"signIn()\">\r\n        <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input  type=\"text\" \r\n                class=\"form-control\" \r\n                id=\"username\" \r\n                required\r\n                [(ngModel)]=\"username\" \r\n                name=\"username\"\r\n                #usernameInput=\"ngModel\" \r\n                pattern={{usernamePattern}}>\r\n        <div  [hidden]=\"usernameInput.valid&&!usernameInput.pristine\" \r\n                class=\"alert alert-danger\">{{usernameDiagnostic}}</div>                \r\n        </div>\r\n        <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input  type=\"password\" \r\n                class=\"form-control\" \r\n                id=\"password\" \r\n                required \r\n                [(ngModel)]=\"password\" \r\n                name=\"password\" \r\n                #passwordInput = \"ngModel\"\r\n                pattern={{passwordPattern}}>\r\n        <div  [hidden]=\"passwordInput.valid&&!passwordInput.pristine\" \r\n                class=\"alert alert-danger\">{{passwordDiagnostic}}</div>\r\n        </div>\r\n        <button type=\"submit\" \r\n                class=\"btn btn-success submitButton\" \r\n                [disabled]=\"!signInForm.valid\">Sign In</button>\r\n        <div  [hidden]=\"!invalidCredentials\" \r\n            class=\"alert alert-danger\">{{invalidCredentialsDiagnostic}}</div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/logIn/signIn/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component allowing users to sign into their existing account
 *
 * @export
 * @class SignInComponent
 */
var SignInComponent = (function () {
    function SignInComponent(authService) {
        this.authService = authService;
        /**
         * event to be emitted when the user has signed in
         *
         * @type {EventEmitter<string>}
         * @memberof SignInComponent
         */
        this.signedInEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.usernamePattern = "\\w{1,10}";
        this.usernameDiagnostic = "username must be alphanumeric and be between 1 and 10 characters";
        this.passwordPattern = "\\S{1,10}";
        this.passwordDiagnostic = "password must contain no white space and be between 1 and 10 characters";
        this.invalidCredentials = false;
        this.invalidCredentialsBaseDiagnostic = "Invalid username and/or password!";
        this.invalidCredentialsDiagnostic = "";
    }
    /**
     * attempt to sign into a user's account
     *
     * @memberof SignInComponent
     */
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        console.log(" sign in " + this.username + " " + this.password);
        this.authService.tryLogin(this.username, this.password)
            .then(function () { return _this.signedInEvent.next(_this.username); })
            .catch(this._updateUserOfLoginError.bind(this));
    };
    /**
     * update the invalid login information shown to the user and reset password
     *
     * @param {*} error
     * @memberof SignInComponent
     */
    SignInComponent.prototype._updateUserOfLoginError = function (error) {
        console.log('login err', error);
        this.invalidCredentials = true;
        this.password = '';
        this.invalidCredentialsDiagnostic = this.invalidCredentialsBaseDiagnostic + (error ? (" " + error) : null);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sign-in',
        outputs: ["signedInEvent"],
        template: __webpack_require__("../../../../../src/app/logIn/signIn/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logIn/signIn/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SignInComponent);

var _a;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/logIn/signUp/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logIn/signUp/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signUpFormContainer\">\r\n    <form #signUpForm=\"ngForm\" \r\n            (ngSubmit)=\"signUp()\">\r\n        <!--username-->\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input  type=\"text\" \r\n                    class=\"form-control\" \r\n                    id=\"username\" \r\n                    required \r\n                    [(ngModel)]=\"username\" \r\n                    name=\"username\" \r\n                    #usernameInput=\"ngModel\" \r\n                    pattern={{usernamePattern}}>\r\n            <div  [hidden]=\"usernameInput.valid&&!usernameInput.pristine\" \r\n                    class=\"alert alert-danger\">{{usernameDiagnostic}}</div>                \r\n        </div>\r\n        <!--password-->\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input  type=\"password\" \r\n                    class=\"form-control\" \r\n                    name=\"password\" \r\n                    id=\"password\" \r\n                    required \r\n                    [(ngModel)]=\"password\" \r\n                    #passwordInput = \"ngModel\"\r\n                    pattern={{passwordPattern}}>\r\n            <div  [hidden]=\"passwordInput.valid&&!passwordInput.pristine\" \r\n                    class=\"alert alert-danger\">{{passwordDiagnostic}}</div>\r\n            </div>\r\n        <!--Location-->\r\n        <div class=\"form-group\">\r\n            <label for=\"location\">Location</label>\r\n            <input  type=\"text\" \r\n                    class=\"form-control\" \r\n                    name=\"location\" \r\n                    id=\"location\" \r\n                    required \r\n                    [(ngModel)]=\"location\" \r\n                    #locationInput = \"ngModel\"\r\n                    pattern={{locationPattern}}>\r\n            <div  [hidden]=\"locationInput.valid&&!locationInput.pristine\" \r\n                    class=\"alert alert-danger\">{{locationDiagnostic}}</div>\r\n        </div>\r\n        <!--Date of birth-->\r\n        <div class=\"form-group\">\r\n            <label for=\"DOB\">Date of Birth</label>\r\n            <input  type=\"date\" \r\n                    class=\"form-control\" \r\n                    name=\"DOB\" \r\n                    id=\"DOB\" \r\n                    required \r\n                    [(ngModel)]=\"DOB\" \r\n                    #DOBInput = \"ngModel\" \r\n                    [max]=\"DOBMax\">\r\n            <div  [hidden]=\"DOBInput.valid&&!DOBInput.pristine\" \r\n                    class=\"alert alert-danger\">{{DOBDiagnostic}}</div>\r\n            </div>          \r\n        <!--Business-->\r\n        <div class=\"form-group\">\r\n            <label for=\"business\">Business</label>\r\n            <input  type=\"text\" \r\n                    class=\"form-control\" \r\n                    name=\"business\" \r\n                    id=\"business\" \r\n                    required \r\n                    [(ngModel)]=\"business\" \r\n                    #businessInput = \"ngModel\"\r\n                    pattern={{businessPattern}}>\r\n            <div  [hidden]=\"businessInput.valid&&!businessInput.pristine\" \r\n                    class=\"alert alert-danger\">{{businessDiagnostic}}</div>\r\n        </div>\r\n        <!--Picture-->\r\n        <div class=\"form-group\">\r\n            <label for=\"picture\">Picture</label>\r\n            <input  type=\"file\" \r\n                    class=\"form-control\" \r\n                    name=\"picture\" \r\n                    id=\"picture\" \r\n                    required \r\n                    accept=\"image/*\" \r\n                    (change)=\"addPicture($event)\" \r\n                    [class.inputValid]=\"!!picture\" \r\n                    [class.inputInvalid]=\"!picture\">\r\n            <div  [hidden]=\"!!picture\" \r\n                    class=\"alert alert-danger\">{{pictureDiagnostic}}</div>\r\n        </div>                    \r\n        <!--submit-->\r\n        <button type=\"submit\" \r\n                class=\"btn btn-success submitButton\" \r\n                [disabled]=\"(!signUpForm.valid)||(!picture)\">Sign Up</button>\r\n    </form>        \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/logIn/signUp/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sign_up_service__ = __webpack_require__("../../../../../src/app/services/sign-up.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        this.signedUpEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
        alert(error);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sign-up',
        outputs: ["signedUpEvent"],
        template: __webpack_require__("../../../../../src/app/logIn/signUp/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logIn/signUp/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sign_up_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sign_up_service__["a" /* SignUpService */]) === "function" && _a || Object])
], SignUpComponent);

var _a;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/member/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#postForm {\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\n.posts{\r\n    width: 100%;\r\n    margin-top: 25px;\r\n}\r\n\r\n#addContent{\r\n    display: block;\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"postItemRow\" class=\"row\">\r\n    \r\n    <div class = col-sm-12>\r\n    \r\n        <button id=\"addContent\" \r\n                class=\"btn btn-primary centered\" \r\n                data-toggle=\"collapse\" \r\n                data-target=\"#postFormContainer\">New Post</button>\r\n    \r\n        <div    id=\"postFormContainer\" \r\n                class=\"collapse\">\r\n    \r\n            <div class=\"large centered\">\r\n                <message-form   rows=\"10\" \r\n                                label=\"Posts\"\r\n                                (postSubmitted)=\"addPost($event)\"></message-form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!followedPosts\">\r\nLoading...\r\n</div>\r\n\r\n<div class=\"posts\">\r\n\r\n    <div *ngFor=\"let post of followedPosts\">\r\n\r\n        <post   [poster]=\"post.poster\" \r\n                [timestamp]=\"post.timestamp\" \r\n                [content]=\"post.content\" \r\n                (userSelect)=\"selectUser($event)\"></post>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/member/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/member/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component showing the member's home page, allowing the to
 * view followed posts and add new ones
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
var HomeComponent = (function () {
    /**
     * Creates an instance of HomeComponent.
     * @param {PostService} postService
     * @memberof HomeComponent
     */
    function HomeComponent(postService) {
        this.postService = postService;
        /**
         * event to be emitted when a user is selected from the followed posts
         *
         * @type {EventEmitter<string>}
         * @memberof HomeComponent
         */
        this.userSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    /**
     * update the list of followed posts on init
     *
     * @memberof HomeComponent
     */
    HomeComponent.prototype.ngOnInit = function () {
        this._updateFollowedPosts();
        console.log('home', this.username);
    };
    /**
     * add a new post
     *
     * @param {string} postContent
     * @memberof HomeComponent
     */
    HomeComponent.prototype.addPost = function (postContent) {
        this.postService.addPost(this.username, postContent)
            .then(function () {
            console.log('add post comp', this.username, postContent);
            return this._updateFollowedPosts();
        }.bind(this));
    };
    /**
     * update the list of followed posts
     *
     * @returns {Promise<Post[]>}
     * @memberof HomeComponent
     */
    HomeComponent.prototype._updateFollowedPosts = function () {
        return this.postService.getFollowedPosts(this.username)
            .then(function (followedPosts) {
            console.log('update', followedPosts);
            this.followedPosts = followedPosts;
        }.bind(this));
    };
    /**
     * select a user from the list of posts and emit the userSelect event
     *
     * @param {string} otherUsername
     * @memberof HomeComponent
     */
    HomeComponent.prototype.selectUser = function (selectedUserName) {
        this.userSelect.next(selectedUserName);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'member-home',
        inputs: ['username'],
        outputs: ['userSelect'],
        template: __webpack_require__("../../../../../src/app/member/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member/home/home.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/member/member.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .ad {\r\n    background-color: grey;\r\n    color: white;\r\n    height: 100px;\r\n} */\r\n\r\n.contentItem{\r\n    background-color: green;\r\n    border: 5px solid black;\r\n}\r\n\r\ndiv.placeHolder100 {\r\n    height: 100px;\r\n}\r\n\r\ndiv.placeHolder150 {\r\n    height: 150px;\r\n}\r\n\r\n.navButton {\r\n    padding: 10px 0px;\r\n}\r\n\r\n.interactBtn {\r\n    padding: 10px 0px;\r\n    width: 50%;\r\n}\r\n\r\n/* .picture {\r\n    height: 500px;\r\n    max-width: 100%;\r\n} */\r\n\r\n.nameText {\r\n    margin-top: 70px;\r\n    font-size: 70px;\r\n}\r\n\r\n.infoText {\r\n    font-size: 36px\r\n}\r\n\r\n/* .centered {\r\n    display: block;\r\n    margin: auto;\r\n} */\r\n\r\n/* .fullwidth {\r\n    width: 100%;\r\n} */\r\n\r\n#searchField {\r\n    width: 60%;\r\n    padding: 9px 0px;\r\n}\r\n\r\n#searchButton {\r\n    width: 38%;\r\n    padding: 10px 0px;\r\n    position: absolute;\r\n}\r\n\r\n#homeButton {\r\n    width: 18%;\r\n}\r\n\r\n#messagesButton {\r\n    width: 35%;\r\n}\r\n\r\n#premiumButton {\r\n    width: 27%;\r\n}\r\n\r\n#signOutButton {\r\n    width: 20%;\r\n}\r\n/* \r\n.thumbnail {\r\n    max-width: 250px;\r\n    height: auto;\r\n}\r\n\r\n.fullsize {\r\n    max-height: 500px;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.floatLeft {\r\n    float:right;\r\n}\r\n\r\n.overflowHidden {\r\n    overflow: hidden;\r\n}\r\n\r\n.displayInline {\r\n    display: inline;\r\n} */\r\n\r\n\r\n\r\n/* .centeredText {\r\n    text-align: center;\r\n}\r\n\r\n.large {\r\n    width: 90%\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    \r\n    <div class=\"row\">\r\n    \r\n        <div class=\"ad col-sm-6\" id=\"ad1\">\r\n            Add 1\r\n        </div>\r\n    \r\n        <div class=\"ad col-sm-6\" id=\"ad2\">\r\n            Add 2\r\n        </div>\r\n    </div>\r\n    \r\n    <br>\r\n    <div    class=\"row\" \r\n            id=\"navigation\">\r\n        \r\n        <div    id=\"searchForm\" \r\n                class=\"col-sm-4\">\r\n            \r\n            <div class=\"fullwidth\">\r\n                \r\n                <input  type=\"text\" \r\n                        id=\"searchField\" \r\n                        #searchField \r\n                        (keyup.enter)=\"search(searchField.value)\">\r\n                \r\n                <button id=\"searchButton\" \r\n                        type=\"submit\" \r\n                        class=\"btn btn-success\" \r\n                        (click)=\"search(searchField.value)\">Search</button>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"col-sm-8\">\r\n            <div    class=\"btn-group fullwidth\" \r\n                    role=\"group\">\r\n                \r\n                <a  id=\"homeButton\" \r\n                    class=\"btn btn-primary navButton\" \r\n                    (click)=\"go('home')\">home</a>\r\n                \r\n                <a  id=\"messagesButton\" \r\n                    class=\"btn btn-primary navButton\" \r\n                    (click)=\"go('messages')\">\r\n                    <span   id=\"messageCount\" \r\n                            class=\"badge\">{{messageCount}}</span>     messages</a>\r\n                \r\n                <a  id=\"premiumButton\" \r\n                    class=\"btn btn-primary navButton\" \r\n                    (click)=\"go('premium')\">premium</a>\r\n                \r\n                <button id=\"signOutButton\" \r\n                        class=\"btn btn-primary navButton\" \r\n                        (click)=\"signout()\">signout</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <br>\r\n    <div class=\"row\" [ngSwitch]=\"currentPage\">\r\n        \r\n        <member-home    *ngSwitchCase=\"'home'\" \r\n                        [username]=\"username\" \r\n                        (userSelect)=\"goProfile($event)\"></member-home>\r\n        \r\n        <member-messages    *ngSwitchCase=\"'messages'\" \r\n                            [username]=\"username\"\r\n                            (userSelect)=\"goProfile($event)\"></member-messages>\r\n        \r\n        <member-premium     *ngSwitchCase=\"'premium'\" \r\n                            [username]=\"username\"\r\n                            (userSelect)=\"goProfile($event)\"></member-premium>\r\n        \r\n        <member-search  *ngSwitchCase=\"'search'\" \r\n                        [username]=\"username\" \r\n                        [searchPattern]=\"searchComponentData.searchPattern\" \r\n                        (userSelect)=\"goProfile($event)\"></member-search>\r\n        \r\n        <member-profile *ngSwitchCase=\"'profile'\" \r\n                        [username]=\"username\" \r\n                        [profileUsername]=\"profileComponentData.profileUsername\"></member-profile>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/member/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AuthService } from './../services/mock_auth.service';

// import {MessageService} from './services/mock_message.service';
/**
 * Component implementing the member area, including the following
 * pages: home, messages, search, premium, profile
 *
 * @export
 * @class MemberComponent
 * @implements {OnInit}
 */
var MemberComponent = (function () {
    function MemberComponent(authService, router, messageService, activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.activatedRoute = activatedRoute;
        // currently displayed page 
        this.currentPage = "home";
        // data required by the search component
        this.searchComponentData = {
            searchPattern: ''
        };
        // data required by the other user component
        this.profileComponentData = {
            profileUsername: ''
        };
    }
    /**
     * update the count of the number of messages available
     *
     * @returns {Promise<any>}
     * @memberof MemberComponent
     */
    MemberComponent.prototype._setMessageCount = function () {
        console.log('get message count');
        return this.messageService.getMessageCount(this.username)
            .then(function (messageCount) {
            console.log('message count', messageCount);
            this.messageCount = messageCount;
        }.bind(this));
    };
    /**
     * go to a particlar view/page in the member area
     *
     * @param {string} page - the page in the member area to display
     * @memberof MemberComponent
     */
    MemberComponent.prototype.go = function (page) {
        this.authService.assertLoggedIn(this.username)
            .then(this._setMessageCount.bind(this))
            .catch(function (e) { return console.log(e); });
        this.currentPage = page;
    };
    /**
     * perform a search for other users
     *
     * @param {string} searchPattern - the search pattern to match usernames
     * @memberof MemberComponent
     */
    MemberComponent.prototype.search = function (searchPattern) {
        console.log('search searchPattern', searchPattern);
        this.searchComponentData.searchPattern = searchPattern;
        this.go('search');
    };
    /**
     * go to a users profile
     *
     * @param {string} profileUsername - the username of the user whose profile
     *    should be shown
     * @memberof MemberComponent
     */
    MemberComponent.prototype.goProfile = function (profileUsername) {
        console.log('visit other!', profileUsername);
        this.profileComponentData.profileUsername = profileUsername;
        this.go("profile");
    };
    /**
     * sign out of the member area
     *
     * @memberof MemberComponent
     */
    MemberComponent.prototype.signout = function () {
        this.authService.signout(this.username)
            .then(function (signedOut) {
            this.router.navigate(['/sign-in']);
        }.bind(this));
    };
    /**
     * set the username, assert the user is logged in and then set
     * the message count on init
     *
     * @memberof MemberComponent
     */
    MemberComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (params) {
            console.log(params);
            // get the username
            this.username = params["ownName"];
            ;
            console.log('username', this.username);
            // verify login
            this.authService.assertLoggedIn(this.username)
                .then(this._setMessageCount.bind(this))
                .catch(function (e) { return console.log(e); });
        }.bind(this));
    };
    return MemberComponent;
}());
MemberComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/member/member.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member/member.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], MemberComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=member.component.js.map

/***/ }),

/***/ "../../../../../src/app/member/member.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_component__ = __webpack_require__("../../../../../src/app/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/member/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_messages_component__ = __webpack_require__("../../../../../src/app/member/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/member/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__("../../../../../src/app/member/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__premium_premium_component__ = __webpack_require__("../../../../../src/app/member/premium/premium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_messageForm_message_form_component__ = __webpack_require__("../../../../../src/app/member/utils/messageForm/message-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_post_post_component__ = __webpack_require__("../../../../../src/app/member/utils/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_message_service__ = __webpack_require__("../../../../../src/app/member/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_post_service__ = __webpack_require__("../../../../../src/app/member/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_personal_data_service__ = __webpack_require__("../../../../../src/app/member/services/personal-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_premium_service__ = __webpack_require__("../../../../../src/app/member/services/premium.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_subscription_service__ = __webpack_require__("../../../../../src/app/member/services/subscription.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MemberModule = (function () {
    function MemberModule() {
    }
    return MemberModule;
}());
MemberModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__member_component__["a" /* MemberComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__premium_premium_component__["a" /* PremiumComponent */],
            __WEBPACK_IMPORTED_MODULE_9__utils_messageForm_message_form_component__["a" /* MessageFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__utils_post_post_component__["a" /* PostComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_13__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_14__services_personal_data_service__["a" /* PersonalDataService */],
            __WEBPACK_IMPORTED_MODULE_15__services_premium_service__["a" /* PremiumService */],
            __WEBPACK_IMPORTED_MODULE_16__services_subscription_service__["a" /* SubscriptionService */]]
    })
], MemberModule);

;
//# sourceMappingURL=member.module.js.map

/***/ }),

/***/ "../../../../../src/app/member/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!messages\">\r\nLoading...\r\n</div>\r\n<div class=\"posts\">\r\n    <div *ngFor=\"let post of messages\">\r\n        <post   [poster]=\"post.poster\" \r\n                [timestamp]=\"post.timestamp\" \r\n                [content]=\"post.content\"\r\n                (userSelect)=\"selectUser($event)\"></post>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/member/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("../../../../../src/app/member/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        this.userSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'member-messages',
        inputs: ['username'],
        outputs: ['userSelect'],
        template: __webpack_require__("../../../../../src/app/member/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]) === "function" && _a || Object])
], MessagesComponent);

var _a;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/member/premium/premium.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".smallForm {\r\n    width: 50%;\r\n    min-width: 500px;\r\n}\r\n\r\n.fullWidth {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/premium/premium.component.html":
/***/ (function(module, exports) {

module.exports = "<form #premiumForm=\"ngForm\" (ngSubmit)=\"fileInput.value=null; onSubmit()\">\r\n    <div class=\"form-group centered smallForm\">\r\n        <label for=\"premiumItem\">Purchase New Premium Item</label>\r\n        <input id=\"premiumItem\" #fileInput type=\"file\" required class=\"form-control fullWidth\" (change)=\"selectContent($event)\">\r\n        <button type=\"submit\" class=\"btn btn-success fullWidth\" [disabled]=\"!premiumForm.valid\">Purchase</button>\r\n    </div>\r\n</form>\r\n<br>\r\n<div *ngIf=\"!premiumGroups\">\r\nLoading...\r\n</div>\r\n<div *ngFor=\"let group of premiumGroups\" class=\"row\">\r\n    <div *ngFor=\"let item of group\" class = \"col-sm-4\">\r\n        <img src=\"{{item}}\" alt=\"Premium Item\" class=\"thumbnail centered\">\r\n    </div>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/member/premium/premium.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_premium_service__ = __webpack_require__("../../../../../src/app/member/services/premium.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component providing viewing and purchase of premium content
 *
 * @export
 * @class PremiumComponent
 * @implements {OnInit}
 */
var PremiumComponent = (function () {
    /**
     * Creates an instance of PremiumComponent.
     * @param {PremiumService} premiumService
     * @memberof PremiumComponent
     */
    function PremiumComponent(premiumService) {
        this.premiumService = premiumService;
    }
    /**
     * get the user's premium content and populate the grid on init
     *
     * @memberof PremiumComponent
     */
    PremiumComponent.prototype.ngOnInit = function () {
        this.premiumService.getPremium(this.username)
            .then(function (premiumItems) {
            var premiumStrings = premiumItems.map(function (item) { return item.content; });
            this.premiumGroups = this._toGrid(premiumStrings, 3);
        }.bind(this));
    };
    /**
     * submit new premium content
     *
     * @memberof PremiumComponent
     */
    PremiumComponent.prototype.onSubmit = function () {
        var _this = this;
        this.premiumService.addPremium(this.username, this.newContent)
            .then(function () { return _this.premiumService.getPremium(_this.username); })
            .then(function (premiumItems) {
            var premiumStrings = premiumItems.map(function (item) { return item.content; });
            this.premiumGroups = this._toGrid(premiumStrings, 3);
        }.bind(this));
    };
    PremiumComponent.prototype.selectContent = function (event) {
        this.newContent = event.target.files[0];
    };
    /**
     * create a grid
     *
     * @param {any[]} items
     * @param {number} nCols
     * @returns
     * @memberof PremiumComponent
     */
    PremiumComponent.prototype._toGrid = function (items, nCols) {
        var grid = [];
        var max = nCols * Math.ceil(items.length / nCols);
        for (var idx = 0; idx < max; idx += nCols) {
            grid.push(items.slice(idx, idx + nCols));
        }
        return grid;
    };
    return PremiumComponent;
}());
PremiumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "member-premium",
        inputs: ['username'],
        template: __webpack_require__("../../../../../src/app/member/premium/premium.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member/premium/premium.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_premium_service__["a" /* PremiumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_premium_service__["a" /* PremiumService */]) === "function" && _a || Object])
], PremiumComponent);

var _a;
//# sourceMappingURL=premium.component.js.map

/***/ }),

/***/ "../../../../../src/app/member/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#followButton {\r\n    margin-left: 20%;\r\n    width: 30%;\r\n}\r\n\r\n#messageButton {\r\n    width: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div    *ngIf=\"profileUserData\" \r\n        class=\"row\">\r\n    <div class=\"col-sm-6 overflowHidden\">\r\n        <img    src=\"{{profileUserData.picture}}\" \r\n                alt=\"{{profileUserData.name}}'s photo'\" \r\n                class=\"fullsize centered\">\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <p class=\"centeredText\">\r\n            Name: {{profileUserData.name}}\r\n            <br>Age: {{profileUserData.age}}\r\n            <br>Location: {{profileUserData.location}}\r\n            <br>Business: {{profileUserData.business}}</p>\r\n        <br>\r\n        <button id=\"followButton\" \r\n                (click)=\"subscribe()\">Follow\r\n        </button><button \r\n                    id=\"messageButton\" \r\n                    data-toggle=\"collapse\" \r\n                    data-target=\"#sendMessageContainer\">Message</button>                    \r\n    </div>\r\n</div>\r\n<div id=\"sendMessageContainer\" class=\"collapse\">\r\n    <div class=\"large centered\">\r\n        <message-form   rows=\"15\" \r\n                        label=\"Message\"\r\n                        (postSubmitted)=\"sendMessage($event)\"></message-form>\r\n    </div>\r\n</div>\r\n<div class=\"posts\">\r\n    <div *ngFor=\"let post of profilePosts\">\r\n        <post   [poster]=\"post.poster\" \r\n                [timestamp]=\"post.timestamp\" \r\n                [content]=\"post.content\"></post>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/member/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_personal_data_service__ = __webpack_require__("../../../../../src/app/member/services/personal-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/member/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/member/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_subscription_service__ = __webpack_require__("../../../../../src/app/member/services/subscription.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'member-profile',
        inputs: ['username', 'profileUsername'],
        template: __webpack_require__("../../../../../src/app/member/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_personal_data_service__["a" /* PersonalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_personal_data_service__["a" /* PersonalDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_subscription_service__["a" /* SubscriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_subscription_service__["a" /* SubscriptionService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/member/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".userData {\r\n    background-color: #7a8c9b;\r\n    border-color: black;\r\n    border-radius: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!userGroups\">\r\nLoading...\r\n</div>\r\n<div    *ngFor=\"let userGroup of userGroups\" \r\n        class=\"row\">\r\n    <div *ngFor=\"let user of userGroup\">\r\n        <div class=\"col-sm-2 overflowHidden\">\r\n            <a (click)=\"_selectUser(user.name)\">\r\n                <img    src=\"{{user.picture}}\" \r\n                        alt=\"{{user.name}}'s photo'\" \r\n                        class=\"fullsize centered\">\r\n            </a>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div>\r\n                <p>Name: {{user.name}}</p>\r\n                <p>Age: {{user.age}}</p>\r\n                <p>Location: {{user.location}}</p>\r\n                <p>Business: {{user.business}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/member/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_personal_data_service__ = __webpack_require__("../../../../../src/app/member/services/personal-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component for searching for members on the site
 *
 * @export
 * @class SearchComponent
 * @implements {OnChanges}
 */
var SearchComponent = (function () {
    /**
     * Creates an instance of SearchComponent.
     * @param {PersonalDataService} personalDataService
     * @memberof SearchComponent
     */
    function SearchComponent(personalDataService) {
        this.personalDataService = personalDataService;
        /**
         * event to be emitted when a user is selected from the search results
         *
         * @type {EventEmitter<string>}
         * @memberof SearchComponent
         */
        this.userSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    /**
     * select a user from the search results
     *
     * @param {string} name - the username of the selected user
     * @memberof SearchComponent
     */
    SearchComponent.prototype._selectUser = function (name) {
        console.log('selected ' + name);
        this.userSelect.next(name);
    };
    /**
     * search for users that match the search pattern on changes to the page
     *
     * @memberof SearchComponent
     */
    SearchComponent.prototype.ngOnChanges = function () {
        console.log('searchpattern', this.searchPattern);
        this.personalDataService.searchUserData(this.username, this.searchPattern)
            .then(function (users) {
            this.userGroups = this._toGrid(users, 3);
        }.bind(this));
    };
    /**
     * convert the array of search results to a grid
     *
     * @param {any[]} items - the items in the grid
     * @param {number} nCols - numbe of columns of the grid
     * @returns
     * @memberof SearchComponent
     */
    SearchComponent.prototype._toGrid = function (items, nCols) {
        var grid = [];
        var max = nCols * Math.ceil(items.length / nCols);
        for (var idx = 0; idx < max; idx += nCols) {
            grid.push(items.slice(idx, idx + nCols));
        }
        return grid;
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'member-search',
        inputs: ['username', 'searchPattern'],
        outputs: ['userSelect'],
        template: __webpack_require__("../../../../../src/app/member/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_personal_data_service__["a" /* PersonalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_personal_data_service__["a" /* PersonalDataService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/member/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__ = __webpack_require__("../../../../../src/app/utils/handleResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service providing a user to access to messages
 *
 * @export
 * @class MessageService
 */
var MessageService = (function () {
    /**
     * Creates an instance of MessageService.
     * @param {Http} http
     * @memberof MessageService
     */
    function MessageService(http) {
        this.http = http;
        /**
         * url providing access to the message resource
         *
         * @private
         * @type {string}
         * @memberof MessageService
         */
        this._messageUrl = "/message";
    }
    /**
     * get the number of message available to a user
     *
     * @param {string} username
     * @returns {Promise<number>}
     * @memberof MessageService
     */
    MessageService.prototype.getMessageCount = function (username) {
        return this.getMessages(username).then(function (ms) { return ms.length; });
    };
    /**
     * get the messages available to a user
     *
     * @param {string} username
     * @returns {Promise<Post[]>}
     * @memberof MessageService
     */
    MessageService.prototype.getMessages = function (username) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            var resolver = function (resp) { return res(resp.json().data); };
            _this.http.get(_this._messageUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(resolver, resp, 200, "Could not get messages."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * send a new message from a user to another user
     *
     * @param {string} username - the name of the user sending the message
     * @param {string} content - the content of the message
     * @param {string} recipient - the recipient of the message
     * @returns {Promise<{}>}
     * @memberof MessageService
     */
    MessageService.prototype.addMessage = function (username, content, recipient) {
        var _this = this;
        console.log('add post', username, content);
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            data.append('content', content);
            data.append('recipient', recipient);
            _this.http.post(_this._messageUrl, data)
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(res, resp, 201, "Could not add message."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * delete a message
     *
     * @param {string} username - the name of the user whose message should be deleted
     * @param {number} idx - the index of the message to delete
     * @returns {Promise<{}>}
     * @memberof MessageService
     */
    MessageService.prototype.deleteMessage = function (username, idx) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            data.append('index', idx.toString());
            _this.http.post(_this._messageUrl, data)
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(res, resp, 204, "Could not delete message."); })
                .then(function () { return res(); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/member/services/personal-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_handleResponse__ = __webpack_require__("../../../../../src/app/utils/handleResponse.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service providing access to a user's personal data
 *
 * @export
 * @class PersonalDataService
 */
var PersonalDataService = (function () {
    /**
     * Creates an instance of PersonalDataService.
     * @param {Http} http
     * @memberof PersonalDataService
     */
    function PersonalDataService(http) {
        this.http = http;
        /**
         * url of the personalData resource
         *
         * @private
         * @memberof PersonalDataService
         */
        this._personalDataUrl = "/personalData";
    }
    /**
     * get the personal data of a user
     *
     * @param {string} username - the username of the signed in user
     * @param {string} desiredUserName - the username of the user whose personal data is desired
     * @returns {Promise<User>}
     * @memberof PersonalDataService
     */
    PersonalDataService.prototype.getUserData = function (username, desiredUserName) {
        var _this = this;
        var resolverFactory = function (res) { return function (resp) { return res(_this._setAge(resp.json())); }; };
        return this._getUserData(username, "desiredUserName", desiredUserName, resolverFactory);
    };
    /**
     * update the user object to include the user's age, based on their DOB
     *
     * @private
     * @param {*} user - the personal data object of the user
     * @returns {User}
     * @memberof PersonalDataService
     */
    PersonalDataService.prototype._setAge = function (user) {
        user.age = Math.floor((Date.now() - Date.parse(user.DOB)) / 1000 / 60 / 60 / 24 / 365);
        return user;
    };
    /**
     * return user data for users matching a query
     *
     * @param {string} username - the name of the logged in user
     * @param {string} desiredUserQuery - query to match other users
     * @returns {Promise<User[]>}
     * @memberof PersonalDataService
     */
    PersonalDataService.prototype.searchUserData = function (username, desiredUserQuery) {
        var _this = this;
        var resolverFactory = function (res) { return function (resp) { return res(resp.json().data.map(function (user) { return _this._setAge(user); })); }; };
        return this._getUserData(username, "desiredUserQuery", desiredUserQuery, resolverFactory);
    };
    /**
     * get the user data of a single user or multiple users
     *
     * @private
     * @param {string} username - the username of the currently signed in user
     * @param {string} paramType - parameter specifying how to identify users ("desiredUserName" or "desiredUserQuery")
     * @param {string} param - the name of the user or the search query
     * @param {Function} resolverFactory - function creating a resolver to handle the retrieved data
     * @returns {Promise<any>}
     * @memberof PersonalDataService
     */
    PersonalDataService.prototype._getUserData = function (username, paramType, param, resolverFactory) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            data.append(paramType, param);
            var resolver = resolverFactory(res);
            _this.http.get(_this._personalDataUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_3__utils_handleResponse__["a" /* assertStatus */])(resolver, resp, 200, "Could not get personal data."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_3__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    return PersonalDataService;
}());
PersonalDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PersonalDataService);

var _a;
//# sourceMappingURL=personal-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/member/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__ = __webpack_require__("../../../../../src/app/utils/handleResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service providing a user access to posts
 *
 * @export
 * @class PostService
 */
var PostService = (function () {
    /**
     * Creates an instance of PostService.
     * @param {Http} http
     * @memberof PostService
     */
    function PostService(http) {
        this.http = http;
        /**
         * url of the post resource
         *
         * @private
         * @type {string}
         * @memberof PostService
         */
        this._postUrl = "/post";
    }
    /**
     * get the posts followed by a user
     *
     * @param {string} username
     * @returns {Promise<Post[]>}
     * @memberof PostService
     */
    PostService.prototype.getFollowedPosts = function (username) {
        return this._getPosts(username, username, "followed");
    };
    /**
     * get the posts created by a user
     *
     * @param {string} username
     * @param {string} poster
     * @returns {Promise<Post[]>}
     * @memberof PostService
     */
    PostService.prototype.getOwnPosts = function (username, poster) {
        return this._getPosts(username, poster, "own");
    };
    /**
     * get various types of posts
     *
     * @private
     * @param {string} username
     * @param {string} poster
     * @param {string} type - the type of posts ("followed" or "own")
     * @returns {Promise<Post[]>}
     * @memberof PostService
     */
    PostService.prototype._getPosts = function (username, poster, type) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            data.append('poster', poster);
            data.append('type', type);
            var resolver = function (resp) { return res(resp.json().data); };
            _this.http.get(_this._postUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(resolver, resp, 200, "Could not get posts."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * add a new post
     *
     * @param {string} username
     * @param {string} content
     * @returns {Promise<{}>}
     * @memberof PostService
     */
    PostService.prototype.addPost = function (username, content) {
        var _this = this;
        console.log('add post', username, content);
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            data.append('content', content);
            _this.http.post(_this._postUrl, data)
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(res, resp, 201, "Could not add post."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * delete a post
     *
     * @param {string} username
     * @param {number} idx - index of the post to delete
     * @returns {Promise<{}>}
     * @memberof PostService
     */
    PostService.prototype.deletePost = function (username, idx) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            data.append('index', idx.toString());
            _this.http.delete(_this._postUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(res, resp, 204, "Could not delete post."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/member/services/premium.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__ = __webpack_require__("../../../../../src/app/utils/handleResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service providing access to premium content
 *
 * @export
 * @class PremiumService
 */
var PremiumService = (function () {
    /**
     * Creates an instance of PremiumService.
     * @param {Http} http
     * @memberof PremiumService
     */
    function PremiumService(http) {
        this.http = http;
        /**
         * url of the premium resource
         *
         * @private
         * @memberof PremiumService
         */
        this._premiumUrl = "/premium";
    }
    /**
     * get the premium items purchased by a user
     *
     * @param {string} username
     * @returns {Promise<string>}
     * @memberof PremiumService
     */
    PremiumService.prototype.getPremium = function (username) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append("username", username);
            var resolver = function (resp) { return res(resp.json().data); };
            _this.http.get(_this._premiumUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(resolver, resp, 200, "Unable to get premium items"); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * purchase a new premium item
     *
     * @param {string} username
     * @param {string} content
     * @returns {Promise<{}>}
     * @memberof PremiumService
     */
    PremiumService.prototype.addPremium = function (username, content) {
        var _this = this;
        return new Promise(function (res, rej) {
            var formData = new FormData();
            formData.append('username', username);
            formData.append("content", content, content.name);
            var resolver = function () { return res(); };
            _this.http.post(_this._premiumUrl, formData)
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(resolver, resp, 201, "Unable to add premium item"); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * delete a premium item
     *
     * @param {string} username
     * @param {number} index - index of the item to remove
     * @returns {Promise<{}>}
     * @memberof PremiumService
     */
    PremiumService.prototype.deletePremium = function (username, index) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append("username", username);
            data.append("index", index.toString());
            var resolver = function () { return res(); };
            _this.http.delete(_this._premiumUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(resolver, resp, 204, "Unable to delete premium item"); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    return PremiumService;
}());
PremiumService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PremiumService);

var _a;
//# sourceMappingURL=premium.service.js.map

/***/ }),

/***/ "../../../../../src/app/member/services/subscription.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__ = __webpack_require__("../../../../../src/app/utils/handleResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service providing access to subscriptions
 *
 * @export
 * @class SubscriptionService
 */
var SubscriptionService = (function () {
    /**
     * Creates an instance of SubscriptionService.
     * @param {Http} http
     * @memberof SubscriptionService
     */
    function SubscriptionService(http) {
        this.http = http;
        /**
         * url of the subscription resource
         *
         * @private
         * @type {string}
         * @memberof SubscriptionService
         */
        this._subscriptionUrl = "/subscription";
    }
    /**
     * get the list of users followed by the current user
     *
     * @param {string} username
     * @returns {Promise<String[]>}
     * @memberof SubscriptionService
     */
    SubscriptionService.prototype.getSubscriptions = function (username) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            var resolver = function (resp) { return res(resp.json().data); };
            _this.http.get(_this._subscriptionUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(resolver, resp, 204, "Could not get subscriptions."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * follow a user
     *
     * @param {string} username
     * @param {string} followee
     * @returns {Promise<{}>}
     * @memberof SubscriptionService
     */
    SubscriptionService.prototype.addSubscription = function (username, followee) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            data.append('followee', followee);
            _this.http.post(_this._subscriptionUrl, data)
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(res, resp, 201, "Could not add subscription."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * unfollow a user
     *
     * @param {string} username
     * @param {string} followee
     * @returns {Promise<{}>}
     * @memberof SubscriptionService
     */
    SubscriptionService.prototype.deleteSubscription = function (username, followee) {
        var _this = this;
        return new Promise(function (res, rej) {
            var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            data.append('username', username);
            data.append('followee', followee);
            _this.http.delete(_this._subscriptionUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["a" /* assertStatus */])(res, resp, 204, "Could not delete subscription."); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    return SubscriptionService;
}());
SubscriptionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SubscriptionService);

var _a;
//# sourceMappingURL=subscription.service.js.map

/***/ }),

/***/ "../../../../../src/app/member/utils/messageForm/message-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#submitPost{\r\n    display: block;\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/utils/messageForm/message-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-group\" #postForm=\"ngForm\" (ngSubmit)=\"submitPost()\">\r\n    <label for=\"postContainer\">{{label}}</label>\r\n    <textarea\r\n            class=\"form-control\" \r\n            [(ngModel)]=\"postContent\"\r\n            name=\"postContent\" \r\n            id=\"postContainer\"\r\n            [rows]=\"rows\" \r\n            required \r\n            #postContentInput=\"ngModel\"></textarea>\r\n    <button type=\"submit\" \r\n            id=\"submitPost\" \r\n            class=\"btn btn-primary centered\" \r\n            [disabled]=\"!postForm.valid\">Submit</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/member/utils/messageForm/message-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageFormComponent = (function () {
    function MessageFormComponent() {
        this.postSubmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MessageFormComponent.prototype.submitPost = function () {
        this.postSubmitted.emit(this.postContent);
        this.postContent = "";
    };
    return MessageFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], MessageFormComponent.prototype, "rows", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], MessageFormComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], MessageFormComponent.prototype, "postSubmitted", void 0);
MessageFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'message-form',
        template: __webpack_require__("../../../../../src/app/member/utils/messageForm/message-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member/utils/messageForm/message-form.component.css")]
    })
], MessageFormComponent);

//# sourceMappingURL=message-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/member/utils/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".postContainer {\r\n    width: 90%;\r\n    margin: 25px auto;\r\n    background-color: #7a8c9b;\r\n    border-color: black;\r\n    border-radius: 5px;\r\n}\r\n\r\n.posterName {\r\n    /*width: 50%;\r\n    margin: auto;\r\n    text-align: center;*/\r\n    padding-left: 5%;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n.timestamp {\r\n    /*width: 50%;\r\n    margin: auto;\r\n    text-align: center;*/\r\n    font-size: 16px;\r\n    color: white;\r\n    padding-left: 2%;\r\n}\r\n\r\n.postContent {\r\n    width: 95%;\r\n    margin: auto;\r\n    text-align: left;\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/utils/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"postContainer\">\r\n    <p>\r\n        <a class=\"posterName\" (click)=\"selectUser(poster)\">{{poster}}</a>\r\n        <span class=\"timestamp\">   {{timestamp}}</span>\r\n    </p>\r\n    <p class=\"postContent\">{{content}}</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/member/utils/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PostComponent = (function () {
    function PostComponent() {
        this.userSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PostComponent.prototype.selectUser = function (otherUsername) {
        this.userSelect.next(otherUsername);
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "post",
        inputs: ["poster", "timestamp", "content"],
        outputs: ["userSelect"],
        template: __webpack_require__("../../../../../src/app/member/utils/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member/utils/post/post.component.css")]
    })
], PostComponent);

//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'not-found',
        template: "<h1>Page not found!</h1>"
    })
], NotFoundComponent);

;
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_handleResponse__ = __webpack_require__("../../../../../src/app/utils/handleResponse.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Service used to authenticate users and provide access to the members area
 *
 * @export
 * @class AuthService
 */
var AuthService = (function () {
    /**
     * Creates an instance of AuthService.
     * @param {Http} http
     * @param {Router} router
     * @memberof AuthService
     */
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        /**
         * url providing access to the session resource
         *
         * @private
         * @type {string}
         * @memberof AuthService
         */
        this._loginUrl = "/session";
    }
    /**
     * attempt to log in
     *
     * @param {string} username
     * @param {string} password
     * @returns {Promise<{}>}
     * @memberof AuthService
     */
    AuthService.prototype.tryLogin = function (username, password) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        data.append('username', username);
        data.append('password', password);
        return new Promise(function (res, rej) {
            _this.http.post(_this._loginUrl, data)
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_7__utils_handleResponse__["a" /* assertStatus */])(res, resp, 201, "Sign-in failed"); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_7__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    /**
     * assert that a user is logged with a valid session in and redirect to the log in page if not
     *
     * @param {string} username
     * @returns {Promise<boolean>}
     * @memberof AuthService
     */
    AuthService.prototype.assertLoggedIn = function (username) {
        console.log("check session " + username);
        var data = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        data.append('username', username);
        return new Promise(function (res, rej) {
            var _this = this;
            var rejector = function () { _this.router.navigate(['/sign-in']); rej(); };
            this.http.get(this._loginUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_7__utils_handleResponse__["a" /* assertStatus */])(res, resp, 200, "invalid session"); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_7__utils_handleResponse__["b" /* handleError */])(rejector, err); });
        }.bind(this));
    };
    /**
     * sign out and delete the user's session
     *
     * @param {string} username
     * @returns {Promise<any>}
     * @memberof AuthService
     */
    AuthService.prototype.signout = function (username) {
        console.log("delete session " + username);
        var data = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        data.append('username', username);
        return new Promise(function (res, rej) {
            this.http.delete(this._loginUrl, { search: data })
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_7__utils_handleResponse__["a" /* assertStatus */])(res, resp, 204, "invalid session, signout failed"); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_7__utils_handleResponse__["b" /* handleError */])(rej, err); });
        }.bind(this));
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/sign-up.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_handleResponse__ = __webpack_require__("../../../../../src/app/utils/handleResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Service that allows new users to sign up for an account
 *
 * @export
 * @class SignUpService
 */
var SignUpService = (function () {
    /**
     * Creates an instance of SignUpService.
     * @param {Http} http
     * @param {AuthService} authService
     * @memberof SignUpService
     */
    function SignUpService(http, authService) {
        this.http = http;
        this.authService = authService;
        /**
         * the url of the signUp resource
         *
         * @private
         * @memberof SignUpService
         */
        this._signUpUrl = '/signUp';
    }
    /**
     * sign up for a member account and automatically sign in if successful
     *
     * @param {string} username - unique name of the user
     * @param {string} location - current location of the user
     * @param {string} DOB - the user's date of birth
     * @param {string} business - the business the user works in
     * @param {*} picture - the user's picture
     * @param {string} password - the user's password
     * @returns {Promise<{}>}
     * @memberof SignUpService
     */
    SignUpService.prototype.signUp = function (username, location, DOB, business, picture, password) {
        var _this = this;
        console.log('send sign up request');
        return new Promise(function (res, rej) {
            var formData = new FormData();
            formData.append('username', username);
            formData.append('location', location);
            formData.append('DOB', DOB);
            formData.append('business', business);
            formData.append("picture", picture, picture.name);
            formData.append('password', password);
            _this.http.post(_this._signUpUrl, formData)
                .toPromise()
                .then(function (resp) { return Object(__WEBPACK_IMPORTED_MODULE_3__utils_handleResponse__["a" /* assertStatus */])(res, resp, 201, "Could not create user."); })
                .then(function () { return _this.authService.tryLogin(username, password); })
                .catch(function (err) { return Object(__WEBPACK_IMPORTED_MODULE_3__utils_handleResponse__["b" /* handleError */])(rej, err); });
        });
    };
    return SignUpService;
}());
SignUpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignUpService);

var _a, _b;
//# sourceMappingURL=sign-up.service.js.map

/***/ }),

/***/ "../../../../../src/app/utils/handleResponse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assertStatus;
/* harmony export (immutable) */ __webpack_exports__["b"] = handleError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");

function assertStatus(res, resp, expectedStatus, diagnostic) {
    var actualStatus = resp.status;
    if (actualStatus !== expectedStatus)
        throw new Error(diagnostic);
    res(resp);
}
function handleError(rej, error) {
    // In a real world app, you might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */] && error.text()) {
        errMsg = error.text();
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    rej(errMsg);
}
//# sourceMappingURL=handleResponse.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map