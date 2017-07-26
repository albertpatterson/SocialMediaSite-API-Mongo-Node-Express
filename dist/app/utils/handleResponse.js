"use strict";
var http_1 = require("@angular/http");
function assertStatus(res, resp, expectedStatus, diagnostic) {
    var actualStatus = resp.status;
    if (actualStatus !== expectedStatus)
        throw new Error(diagnostic);
    res(resp);
}
exports.assertStatus = assertStatus;
function handleError(rej, error) {
    // In a real world app, you might use a remote logging infrastructure
    var errMsg;
    if (error instanceof http_1.Response && error.text()) {
        errMsg = error.json().message;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    rej(errMsg);
}
exports.handleError = handleError;
//# sourceMappingURL=handleResponse.js.map