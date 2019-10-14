import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let ProductList = class ProductList {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        return this.data.loadProducts()
            .subscribe(data => {
            if (data) {
                this.products = data;
            }
        });
    }
};
ProductList = tslib_1.__decorate([
    Component({
        selector: "product-list",
        templateUrl: "productList.component.html",
        styleUrls: ["productList.component.css"]
    })
], ProductList);
export { ProductList };
//# sourceMappingURL=productList.component.js.map