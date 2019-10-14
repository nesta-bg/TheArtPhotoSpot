import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import * as orders from './order';
import { Order, OrderItem } from './order';
let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'http://localhost:63127/api';
        //public order: orders.Order = new orders.Order();
        this.order = new Order();
        this.products = [];
    }
    loadProducts() {
        return this.httpClient.get(`${this.apiUrl}/products`);
    }
    AddToOrder(product) {
        //let item: orders.OrderItem;
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