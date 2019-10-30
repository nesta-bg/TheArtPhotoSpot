import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let Checkout = class Checkout {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = "";
    }
    onCheckout() {
        this.dataService.checkout()
            .subscribe(success => {
            if (success) {
                this.router.navigate(["/"]);
            }
        }, err => this.errorMessage = "Failed to save order");
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