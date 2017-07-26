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
var premium_service_1 = require("./../services/premium.service");
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
     * submit for to purchase premium content. todo: wire up form
     *
     * @memberof PremiumComponent
     */
    PremiumComponent.prototype.onSubmit = function () {
        console.log('submitted!');
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
    core_1.Component({
        selector: "member-premium",
        inputs: ['username'],
        templateUrl: './premium.component.html',
        styleUrls: ['./premium.component.css']
    }),
    __metadata("design:paramtypes", [premium_service_1.PremiumService])
], PremiumComponent);
exports.PremiumComponent = PremiumComponent;
//# sourceMappingURL=premium.component.js.map