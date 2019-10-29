import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let Checkout = class Checkout {
    constructor(data) {
        this.data = data;
    }
    onCheckout() {
        // TODO
        alert("Doing checkout");
    }
};
Checkout = tslib_1.__decorate([
    Component({
        selector: "checkout",
        templateUrl: "checkout.component.html",
        styleUrls: ['checkout.component.css']
    })
], Checkout);
export { Checkout };
//# sourceMappingURL=checkout.component.js.map