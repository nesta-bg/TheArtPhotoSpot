import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './product';
//import * as orders from './order';
import { Order, OrderItem } from './order';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiUrl = 'http://localhost:63127/api';

    constructor(private httpClient: HttpClient) {

    }

    //public order: orders.Order = new orders.Order();
    public order: Order = new Order();

    public products: Product[] = [];

    loadProducts() {
        return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
    }

    public AddToOrder(product: Product) {

        //let item: orders.OrderItem;
        let item: OrderItem;

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