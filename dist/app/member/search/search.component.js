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
        this.userSelect = new core_1.EventEmitter();
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
    core_1.Component({
        selector: 'member-search',
        inputs: ['username', 'searchPattern'],
        outputs: ['userSelect'],
        templateUrl: './search.component.html',
        styleUrls: [
            './search.component.css'
        ]
    }),
    __metadata("design:paramtypes", [personal_data_service_1.PersonalDataService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map