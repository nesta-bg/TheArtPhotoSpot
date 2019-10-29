import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let Login = class Login {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.creds = {
            username: "",
            password: ""
        };
    }
    onLogin() {
    }
};
Login = tslib_1.__decorate([
    Component({
        selector: "login",
        templateUrl: "login.component.html"
    })
], Login);
export { Login };
//# sourceMappingURL=login.component.js.map