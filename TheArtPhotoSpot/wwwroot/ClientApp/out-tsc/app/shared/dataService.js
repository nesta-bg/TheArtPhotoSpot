import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { Order, OrderItem } from './order';
import { map } from 'rxjs/operators';
let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'http://localhost:63127';
        this.token = "";
        this.order = new Order();
    }
    get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    login(creds) {
        return this.httpClient.post(`${this.apiUrl}/account/createtoken`, creds)
            .pipe(map((response) => {
            this.token = response.token;
            this.tokenExpiration = response.expiration;
            return true;
        }));
    }
    loadProducts() {
        return this.httpClient.get(`${this.apiUrl}/api/products`);
    }
    checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime();
        }
        return this.httpClient.post(`${this.apiUrl}/api/orders`, this.order, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map(response => {
            this.order = new Order();
            return true;
        }));
    }
    AddToOrder(product) {
        let item = this.order.items.find(i => i.productId == product.id);
        if (item) {
            item.quantity++;
        }
        else {
            item = new OrderItem();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=dataService.js.map