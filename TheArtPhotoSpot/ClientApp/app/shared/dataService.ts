﻿import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './product';
import { Order, OrderItem } from './order';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiUrl = 'http://localhost:63127';

    constructor(private httpClient: HttpClient) {

    }

    private token: string = "";
    private tokenExpiration: Date;

    public order: Order = new Order();

    public products: Product[] = [];

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public login(creds) {
        return this.httpClient.post(`${this.apiUrl}/account/createtoken`, creds)
            .pipe(map((response: any) => {
                this.token = response.token;
                this.tokenExpiration = response.expiration;
                return true;
            }));
    }

    loadProducts() {
        return this.httpClient.get<Product[]>(`${this.apiUrl}/api/products`);
    }

    public AddToOrder(product: Product) {

        let item: OrderItem = this.order.items.find(i => i.productId == product.id);

        if (item) {
            item.quantity++;
        } else {

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
} 