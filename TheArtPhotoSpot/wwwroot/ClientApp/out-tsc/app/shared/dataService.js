import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.products = [];
    }
    loadProducts() {
        return this.httpClient.get("/api/products")
            .pipe(map((data) => {
            this.products = data;
            return true;
        }));
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=dataService.js.map